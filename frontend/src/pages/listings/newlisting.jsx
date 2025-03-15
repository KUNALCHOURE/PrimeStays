import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-hot-toast';
import { useAuth } from '../../context/authcontext'; 
import api from '../../services/api';

const NewListing = () => {
    const navigate = useNavigate();
    const { user } = useAuth();
    const [loading, setLoading] = useState(false);
    const [formValues, setFormValues] = useState({
        title: '',
        description: '',
        price: '',
        location: '',
        country: '',
        image: null,
        phone: '',
        email: '',
        website: '',
    });
    const [formErrors, setFormErrors] = useState({});

    const handleChange = (e) => {
        const { name, value, files } = e.target;

        if (name === 'image') {
            setFormValues({ ...formValues, image: files ? files[0] : null });
            return;
        }

        setFormValues({ ...formValues, [name]: value });

        if (value.trim() === '') {
            setFormErrors({ ...formErrors, [name]: 'This field is required' });
        } else {
            const newErrors = { ...formErrors };
            delete newErrors[name];
            setFormErrors(newErrors);
        }
    };

    const validateForm = () => {
        const errors = {};

        Object.keys(formValues).forEach(key => {
            if (key !== 'image' && (!formValues[key] || formValues[key].trim() === '')) {
                errors[key] = 'This field is required';
            }
        });

        if (!formValues.image) {
            errors.image = 'Please upload an image';
        }

        setFormErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!validateForm()) return;

        setLoading(true);
        const formData = new FormData();

        Object.entries(formValues).forEach(([key, value]) => {
            if (key !== "image") {
                formData.append(key, value);
            }
        });

        if (formValues.image) {
            formData.append("image", formValues.image);
        }

        // ✅ Include authenticated user ID
        if (user && user._id) {
            formData.append("owner", user._id);
        } else {
            toast.error("User authentication required!");
            setLoading(false);
            return;
        }

        try {
            const response = await api.post("/listings", formData, {
                headers: { "Content-Type": "multipart/form-data" },
            });

            console.log("Response:", response.data);
            toast.success("Listing created successfully!");
            navigate("/listings");
        } catch (error) {
            console.error("Error:", error.response?.data || error.message);
            toast.error(error.response?.data?.error || "Error creating listing");
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="container mx-auto px-4 py-8">
            <h1 className="text-3xl font-bold text-center mb-8">ADD A NEW PLACE</h1>
            <div className="max-w-2xl mx-auto">
                <form onSubmit={handleSubmit} className="space-y-6" encType="multipart/form-data" noValidate>
                    {/* Form Fields (Title, Description, Price, Location, Country, Image, Phone, Email, Website) */}
                    {/* Submit Button */}
                    <div className='flex justify-center'>
                        <button
                            type="submit"
                            disabled={loading}
                            className="w-30 text-center text-white font-bold py-2 px-4 border rounded-md bg-green-500"
                        >
                            {loading ? 'Creating...' : 'CREATE'}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default NewListing;

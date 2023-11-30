import React, { useState } from 'react';
import { Alert } from 'flowbite-react';
import { Spinner } from 'flowbite-react';
import CloseIcon from "../../../header/menu/burgermenu/icons/CloseIcon";
import ModalInputField from "../../../shared/inputs/ModalInputField";
import ModalSubmitButton from "../../../shared/buttons/ModalSubmitButton";
import { useRegisterParticipantMutation } from "../../../../redux/api/api";

const RegistrationModal = ({ isOpen, onClose, onSubmit, id, title }) => {

    // Add the mutation hook
    const [registerParticipant] = useRegisterParticipantMutation();

    const [showSuccessAlert, setShowSuccessAlert] = useState(false);
    const [showErrorAlert, setShowErrorAlert] = useState(false);

    // Additional state to manage loading
    const [isSubmitting, setIsSubmitting] = useState(false);

    const [formData, setFormData] = useState({
        name: '',
        surname: '',
        email: '',
        notes: '',
        event: id,
        educational: ''
    });

    const resetForm = () => {
        setFormData({
            name: '',
            surname: '',
            email: '',
            notes: '',
            educational: ''
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true); // Set loading state
        try {
            await registerParticipant(formData).unwrap();
            setShowErrorAlert(false);
            setShowSuccessAlert(true);

            resetForm();
        } catch (err) {
            console.log(err);
            setShowSuccessAlert(false);
            setShowErrorAlert(true);
        }
        setIsSubmitting(false); // Unset loading state
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };
    if (!isOpen) return null;
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-[100000]">
            <div className="bg-white p-8 rounded-[50px]">

                <h2 className="text-lg font-bold mb-2 text-center">Register for the <br></br>"{title}"</h2>

                {isSubmitting && (
                    <div className="flex justify-center items-center min-h-[686px]">
                        <Spinner aria-label="" size="xl" light="on" color="success" />
                    </div>
                )}
                {showSuccessAlert && (
                    <Alert color="success" onDismiss={() => onClose()} className="items-center">
                        <div className="text-[16px]" >
                            <span className="font-medium text-darkGreen">Success!</span> The form was submitted successfully.
                            <br></br>
                            Email with the details was sent to your email address.
                        </div>

                    </Alert>
                )}
                {showErrorAlert && (
                    <Alert color="failure" onDismiss={() => setShowErrorAlert(false)} className="items-center bg-[#F87171]">
                        <div className="text-[16px] text-red " >
                            <span className="font-medium text-red">Error! </span>
                            There was an issue submitting the form.
                        </div>
                    </Alert>
                )}
                {!showSuccessAlert && !isSubmitting && (
                    <form onSubmit={handleSubmit} className="flex justify-center flex-col align-middle">
                        <ModalInputField
                            label="Name"
                            id="name"
                            name="name"
                            required
                            value={formData.name}
                            onChange={handleChange}
                            placeholder="Anna"
                        />
                        <ModalInputField
                            label="Surname"
                            id="surname"
                            name="surname"
                            required
                            value={formData.surname}
                            onChange={handleChange}
                            placeholder="Lovenko"
                        />
                        <ModalInputField
                            label="Email"
                            id="email"
                            name="email"
                            type="email"
                            value={formData.email}
                            required
                            onChange={handleChange}
                            placeholder="yourmail@gmail.com"
                        />
                        <ModalInputField
                            label="Educational institution"
                            id="educational"
                            name="educational"
                            value={formData.educational}
                            onChange={handleChange}
                            placeholder="National University of Ukraine"
                        />
                        <ModalInputField
                            label="Notes"
                            id="notes"
                            name="notes"
                            value={formData.notes}
                            onChange={handleChange}
                            placeholder="Some additional information"
                        />
                        <ModalSubmitButton text={'Register for the event'} />
                    </form>
                )}

                <CloseIcon onClick={onClose} />
            </div>
        </div>
    );
};

export default RegistrationModal;
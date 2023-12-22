import { useState } from "react";
import { TbFidgetSpinner } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
import useAuth from "../../../hooks/useAuth";
import { addTask } from "../../../api/auth";
import toast from "react-hot-toast";

const CreateTask = () => {
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();
    const { user } = useAuth
    const handleSubmit = async (e) => {
        setLoading(true);
        e.preventDefault();
        const form = e.target
        const title = form.title.value
        const description = form.description.value
        const deadline = form.deadline.value
        const priority = form.priority.value
        const distributor = {
            name: user?.displayName,
            email: user?.email,
            state: "to-do",
        }
        const taskData = {
            title,
            description,
            distributor,
            deadline,
            priority,
        }
        try {
            setLoading(true);
            const data = await addTask(taskData);
            toast.success('Task Added');
            navigate('/dashboard/TaskManagement');
        } catch (error) {
            console.log(error);
            toast.error(error.message);
        } finally {
            setLoading(false);
        }
    }
    return (
        <div className="max-w-md mx-auto bg-white rounded p-6">
            <h1 className="text-2xl font-bold mb-4"><span className='text-red-500 text-4xl'>Create</span> a New Task</h1>
            <form onSubmit={handleSubmit} >
                <div className="mb-4">
                    <label htmlFor="title" className="block text-gray-700 text-sm font-bold mb-2">
                        Title:
                    </label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        className="w-full p-2 border rounded shadow-xl outline-none focus:border-red-500 focus:shadow-red-200 "
                        required
                    />
                </div>
                <div className="mb-4">
                    <label htmlFor="description" className="block text-gray-700 text-sm font-bold mb-2">
                        Description:
                    </label>
                    <textarea
                        id="description"
                        name="description"
                        rows="3"

                        className="w-full p-2 border rounded shadow-xl outline-none focus:border-red-500 focus:shadow-red-200 "
                    ></textarea>
                </div>

                <div className="mb-4">
                    <label htmlFor="deadline" className="block text-gray-700 text-sm font-bold mb-2">
                        Deadline:
                    </label>
                    <input
                        type="date"
                        id="deadline"
                        name="deadline"
                        className="w-full p-2 border rounded shadow-xl outline-none focus:border-red-500 focus:shadow-red-200 "
                        required
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="priority" className="block text-gray-700 text-sm font-bold mb-2">
                        Priority:
                    </label>
                    <select
                        id="priority"
                        name="priority"
                        className="w-full p-2 border rounded shadow-xl outline-none focus:border-red-500 focus:shadow-red-200 "

                        required
                    >
                        <option value="low">Low</option>
                        <option value="moderate">Moderate</option>
                        <option value="high">High</option>
                    </select>
                </div>

                <button type="submit" className="bg-blue-500 text-white p-2 rounded shadow-xl shadow-blue-500">
                    {loading ? (
                        <TbFidgetSpinner className='m-auto animate-spin' size={24} />
                    ) : (
                        'Create Task'
                    )}
                </button>
            </form>
        </div>
    );
};

export default CreateTask;

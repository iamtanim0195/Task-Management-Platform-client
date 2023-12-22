import { getTask } from '../../../api/auth';
import Loader from '../../../components/Shared/Loader';
import useAuth from '../../../hooks/useAuth';
import { useQuery } from '@tanstack/react-query';
const TaskManagement = () => {
    const { loading } = useAuth();
    const { data: tasks = [], isLoading } = useQuery({
        queryKey: ['task'],
        enabled: !loading,
        queryFn: async () => await getTask(),
    });
    if (isLoading) return <Loader />;
    return (
        <div>
            <h1 className="text-2xl font-bold mb-4">Task Management</h1>

            <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                    <tr>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Title
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Description
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Deadline
                        </th>
                        <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                            Priority
                        </th>
                    </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                    {tasks.map((task) => (
                        <tr key={task._id}>
                            <td className="px-6 py-4 whitespace-nowrap">{task.title}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{task.description}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{task.deadline}</td>
                            <td className="px-6 py-4 whitespace-nowrap">{task.priority}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TaskManagement;

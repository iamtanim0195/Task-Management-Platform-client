
const About = () => {
    return (
        <div id="about" className="container mx-auto mt-8 p-8">
            <h2 className="text-4xl font-bold mb-4">About Our Task Management System</h2>
            <p className="text-lg mb-4">
                Welcome to our Task Management System, a powerful platform designed to elevate your productivity
                and task organization. We&#39;ve integrated key features to make task management seamless and efficient.
            </p>
            <p className="text-lg mb-4">
                <strong>Key Features:</strong>
            </p>
            <ul className="list-disc ml-8">
                <li><strong>Create and Organize Tasks:</strong> Users can easily create new tasks with titles, descriptions,
                    deadlines, and priority levels (Low, Moderate, High).</li>
                <li><strong>Task Management Dashboard:</strong> Tasks are displayed in a dynamic dashboard with separate lists for
                    to-do, ongoing, and completed tasks.</li>
                <li><strong>Drag-and-Drop Functionality:</strong> Enjoy the flexibility of dragging tasks seamlessly between &#39;to-do,&#39;
                &#39;ongoing,&#39; and &#39;completed&#39; lists.</li>
                <li><strong>React Hook Form Integration:</strong> We&#39;ve implemented the react-hook-form library to enhance the task
                    creation experience.</li>
                <li><strong>Secure User Authentication:</strong> Users must log in to access and explore the task management dashboard.</li>
                <li><strong>Task Deletion:</strong> Easily delete tasks that are no longer needed, keeping your dashboard organized.</li>
                <li><strong>Toast Notifications:</strong> Stay informed with toast notifications for task assignments, updates, and deadlines.</li>
                <li><strong>Task Editing Functionality:</strong> Edit task details effortlessly with the provided editing button.</li>
            </ul>
            <p className="text-lg mt-4">
                Our mission is to provide a user-friendly and feature-rich environment for managing tasks effectively. Experience the
                convenience of organized task lists, real-time updates, and a seamless workflow.
            </p>
            <p className="text-lg mt-4">
                Thank you for choosing our Task Management System. Let&#39;s make task management a collaborative and efficient journey!
            </p>
        </div>
    );
}

export default About;

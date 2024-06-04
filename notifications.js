// List of notifications
const notifications = [
    "Don't forget to stretch!",
    "Time to drink some water.",
    "Take a deep breath and relax.",
    "How about a short walk?",
    "Check your posture.",
    "Time to review your to-do list.",
    "Have a healthy snack.",
    "Stay focused and keep up the great work!"
];

// Function to show a notification
function showNotification(message) {
    if (Notification.permission === 'granted') {
        new Notification(message);
    } else if (Notification.permission !== 'denied') {
        Notification.requestPermission().then(permission => {
            if (permission === 'granted') {
                new Notification(message);
            }
        });
    }
}

// Function to send notifications at intervals
function startNotifications() {
    let index = 0;
    setInterval(() => {
        showNotification(notifications[index]);
        index = (index + 1) % notifications.length;
    }, 1800000); // 1800000 ms = 30 minutes
}

// Request permission to show notifications
if (Notification.permission === 'default') {
    Notification.requestPermission().then(permission => {
        if (permission === 'granted') {
            startNotifications();
        }
    });
} else if (Notification.permission === 'granted') {
    startNotifications();
}

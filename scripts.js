document.addEventListener('DOMContentLoaded', function() {
    // Sample data for charts
    const dataSets = {
        totalRevenue: [28739, 76704, 88351, 21193, 52945, 73760, 89691, 96606, 75339, 54814, 65601, 48098],
        pageVisits: [76, 88, 65, 80, 92, 85, 79, 64, 81, 84, 90, 89],
        conversionRates: [38, 23, 25, 16, 9, 26, 13, 31, 21, 29, 32, 12],
        userFeedback: [87, 97, 60, 98, 73, 82, 91, 100, 68, 77, 89, 96],
        transactionsByHour: [86, 71, 29, 65, 46, 87, 63, 82, 27, 62, 69, 72],
        transactionsByDay: [76, 49, 40, 76, 59, 78, 73, 75, 54, 88, 81, 20]
    };

    // Initialize each chart
    new Chart(document.getElementById('totalRevenueChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Total Revenue',
                data: dataSets.totalRevenue,
                backgroundColor: 'blue',
                fill: false
            }]
        },
        options: { responsive: true }
    });

    new Chart(document.getElementById('pageVisitsChart'), {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Page Visits',
                data: dataSets.pageVisits,
                backgroundColor: 'pink'
            }]
        },
        options: { responsive: true }
    });

    new Chart(document.getElementById('conversionRateChart'), {
        type: 'line',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'Conversion Rate (%)',
                data: dataSets.conversionRates,
                backgroundColor: 'orange',
                fill: false
            }]
        },
        options: { responsive: true }
    });

    new Chart(document.getElementById('userFeedbackChart'), {
        type: 'bar',
        data: {
            labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'],
            datasets: [{
                label: 'User Feedback',
                data: dataSets.userFeedback,
                backgroundColor: 'purple'
            }]
        },
        options: { responsive: true }
    });

    new Chart(document.getElementById('transactionsByHourChart'), {
        type: 'line',
        data: {
            labels: ['12 AM', '3 AM', '6 AM', '9 AM', '12 PM', '3 PM', '6 PM', '9 PM', '12 AM'],
            datasets: [{
                label: 'Transactions by Hour',
                data: dataSets.transactionsByHour,
                backgroundColor: 'red',
                fill: false
            }]
        },
        options: { responsive: true }
    });

    new Chart(document.getElementById('transactionsByDayChart'), {
        type: 'bar',
        data: {
            labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
            datasets: [{
                label: 'Transactions by Day',
                data: dataSets.transactionsByDay,
                backgroundColor: 'teal'
            }]
        },
        options: { responsive: true }
    });
});

// Toggle the navbar for mobile view
document.addEventListener('DOMContentLoaded', function() {
    const toggleButton = document.querySelector('.toggle-button');
    const navbarLinks = document.querySelector('.navbar-links');

    toggleButton.addEventListener('click', () => {
        navbarLinks.classList.toggle('active');
    });
});

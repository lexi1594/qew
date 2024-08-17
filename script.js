document.addEventListener('DOMContentLoaded', () => {
  const attendanceCtx = document.getElementById('attendanceChart').getContext('2d');
  const overtimeCtx = document.getElementById('overtimeChart').getContext('2d');

  const attendanceChart = new Chart(attendanceCtx, {
    type: 'bar',
    data: {
      labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
      datasets: [{
        label: 'Attendance',
        data: [85, 90, 78, 95, 88, 70, 80],
        backgroundColor: '#3498db',
        borderWidth: 1,
      }],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });

  const overtimeChart = new Chart(overtimeCtx, {
    type: 'line',
    data: {
      labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4'],
      datasets: [{
        label: 'Overtime Hours',
        data: [12, 15, 10, 8],
        backgroundColor: 'rgba(46, 204, 113, 0.2)',
        borderColor: '#2ecc71',
        borderWidth: 2,
      }],
    },
    options: {
      responsive: true,
      scales: {
        y: {
          beginAtZero: true,
        },
      },
    },
  });
});

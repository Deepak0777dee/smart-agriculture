/* ============================================
   CHARTS.JS — Stackly Smart Agriculture
   Chart.js initializations for all dashboard pages
   ============================================ */

const CHART_COLORS = {
  primary: '#1a3a2a',
  primaryLight: '#2d5a3f',
  accent: '#7cb342',
  accentLight: '#9ccc65',
  warm: '#8bc34a',
  warmLight: '#aed581',
  success: '#10b981',
  warning: '#f59e0b',
  danger: '#ef4444',
  info: '#3b82f6',
  purple: '#8b5cf6',
  pink: '#ec4899',
  gray: '#64748b',
  orange: '#f97316'
};

const CHART_DEFAULTS = {
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: 'bottom',
      labels: { usePointStyle: true, padding: 16, font: { size: 11, family: "'Inter', sans-serif" } }
    }
  }
};

/* ---- Dashboard Page Charts ---- */
function initDashboardCharts() {
  const trendCtx = document.getElementById('missionTrendChart');
  if (trendCtx) {
    new Chart(trendCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          {
            label: 'Drone Missions', data: [42, 55, 68, 82, 75, 95, 88, 110],
            borderColor: CHART_COLORS.accent, backgroundColor: 'rgba(124, 179, 66, 0.06)',
            tension: 0.4, fill: true, borderWidth: 2,
            pointRadius: 3, pointBackgroundColor: CHART_COLORS.accent
          },
          {
            label: 'Fields Surveyed', data: [18, 24, 32, 38, 35, 45, 42, 52],
            borderColor: CHART_COLORS.info, backgroundColor: 'rgba(59, 130, 246, 0.06)',
            tension: 0.4, fill: true, borderWidth: 2,
            pointRadius: 3, pointBackgroundColor: CHART_COLORS.info
          }
        ]
      },
      options: {
        ...CHART_DEFAULTS,
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const cropCtx = document.getElementById('cropDistChart');
  if (cropCtx) {
    new Chart(cropCtx, {
      type: 'doughnut',
      data: {
        labels: ['Wheat', 'Rice', 'Cotton', 'Sugarcane', 'Maize', 'Vegetables', 'Pulses'],
        datasets: [{
          data: [28, 22, 15, 12, 10, 8, 5],
          backgroundColor: [
            CHART_COLORS.accent, CHART_COLORS.info, CHART_COLORS.warm,
            CHART_COLORS.purple, CHART_COLORS.orange, CHART_COLORS.primary, CHART_COLORS.gray
          ],
          borderWidth: 0, hoverOffset: 6
        }]
      },
      options: { ...CHART_DEFAULTS, cutout: '68%' }
    });
  }

  const yieldCtx = document.getElementById('yieldChart');
  if (yieldCtx) {
    new Chart(yieldCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Yield (tons)',
          data: [120, 145, 160, 185, 175, 210, 195, 240],
          backgroundColor: CHART_COLORS.accent, borderRadius: 6, barThickness: 28
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const activityCtx = document.getElementById('activityChart');
  if (activityCtx) {
    new Chart(activityCtx, {
      type: 'line',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
        datasets: [{
          label: 'Active Drones',
          data: [8, 12, 15, 11, 14, 6],
          borderColor: CHART_COLORS.warm,
          backgroundColor: 'rgba(139, 195, 74, 0.06)',
          tension: 0.4, fill: true, borderWidth: 2,
          pointRadius: 4, pointBackgroundColor: CHART_COLORS.warm
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }
}

/* ---- Fields Page Charts ---- */
function initFieldCharts() {
  const healthCtx = document.getElementById('fieldHealthChart');
  if (healthCtx) {
    new Chart(healthCtx, {
      type: 'bar',
      data: {
        labels: ['Field A', 'Field B', 'Field C', 'Field D', 'Field E', 'Field F'],
        datasets: [{
          label: 'Health Score %', data: [92, 78, 85, 95, 68, 88],
          backgroundColor: [CHART_COLORS.success, CHART_COLORS.warning, CHART_COLORS.accent, CHART_COLORS.success, CHART_COLORS.danger, CHART_COLORS.accent],
          borderRadius: 6, barThickness: 32
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { min: 0, max: 100, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => v + '%', font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const cropTrendCtx = document.getElementById('cropTrendChart');
  if (cropTrendCtx) {
    new Chart(cropTrendCtx, {
      type: 'line',
      data: {
        labels: ['Week 1', 'Week 2', 'Week 3', 'Week 4', 'Week 5', 'Week 6', 'Week 7', 'Week 8'],
        datasets: [{
          label: 'Avg Health %',
          data: [82, 85, 83, 88, 86, 91, 89, 93],
          borderColor: CHART_COLORS.success,
          backgroundColor: 'rgba(16, 185, 129, 0.06)',
          tension: 0.4, fill: true, borderWidth: 2,
          pointRadius: 4, pointBackgroundColor: CHART_COLORS.success
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { min: 70, max: 100, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => v + '%', font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }
}

/* ---- Drones Page Charts ---- */
function initDroneCharts() {
  const statusCtx = document.getElementById('droneStatusChart');
  if (statusCtx) {
    new Chart(statusCtx, {
      type: 'doughnut',
      data: {
        labels: ['Active', 'Idle', 'Maintenance', 'Offline'],
        datasets: [{
          data: [8, 4, 2, 1],
          backgroundColor: [CHART_COLORS.success, CHART_COLORS.accent, CHART_COLORS.warning, CHART_COLORS.danger],
          borderWidth: 0, hoverOffset: 6
        }]
      },
      options: { ...CHART_DEFAULTS, cutout: '68%' }
    });
  }

  const flightCtx = document.getElementById('flightHoursChart');
  if (flightCtx) {
    new Chart(flightCtx, {
      type: 'bar',
      data: {
        labels: ['DRN-001', 'DRN-002', 'DRN-003', 'DRN-004', 'DRN-005'],
        datasets: [{
          label: 'Flight Hours', data: [245, 198, 312, 167, 280],
          backgroundColor: CHART_COLORS.info, borderRadius: 4, barPercentage: 0.6
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }
}

/* ---- Crops Page Charts ---- */
function initCropCharts() {
  const growthCtx = document.getElementById('growthStageChart');
  if (growthCtx) {
    new Chart(growthCtx, {
      type: 'bar',
      data: {
        labels: ['Germination', 'Seedling', 'Vegetative', 'Flowering', 'Ripening', 'Harvest Ready'],
        datasets: [{
          label: 'Fields', data: [3, 5, 8, 6, 4, 2],
          backgroundColor: [CHART_COLORS.gray, CHART_COLORS.info, CHART_COLORS.accent, CHART_COLORS.warm, CHART_COLORS.orange, CHART_COLORS.success],
          borderRadius: 4
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const healthPieCtx = document.getElementById('cropHealthPie');
  if (healthPieCtx) {
    new Chart(healthPieCtx, {
      type: 'pie',
      data: {
        labels: ['Healthy', 'Moderate', 'Stressed', 'Critical'],
        datasets: [{
          data: [62, 22, 12, 4],
          backgroundColor: [CHART_COLORS.success, CHART_COLORS.accent, CHART_COLORS.warning, CHART_COLORS.danger],
          borderWidth: 0
        }]
      },
      options: { ...CHART_DEFAULTS }
    });
  }
}

/* ---- Analytics Page Charts ---- */
function initAnalyticsCharts() {
  const monthlyYieldCtx = document.getElementById('monthlyYieldChart');
  if (monthlyYieldCtx) {
    new Chart(monthlyYieldCtx, {
      type: 'bar',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [
          { label: 'This Year', data: [120, 145, 160, 185, 175, 210, 195, 240], backgroundColor: CHART_COLORS.accent, borderRadius: 4, barPercentage: 0.6 },
          { label: 'Last Year', data: [95, 110, 125, 140, 135, 165, 150, 190], backgroundColor: CHART_COLORS.gray, borderRadius: 4, barPercentage: 0.6 }
        ]
      },
      options: {
        ...CHART_DEFAULTS,
        scales: {
          y: { beginAtZero: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const seasonCtx = document.getElementById('seasonalChart');
  if (seasonCtx) {
    new Chart(seasonCtx, {
      type: 'line',
      data: {
        labels: ['Q1 2025', 'Q2 2025', 'Q3 2025', 'Q4 2025', 'Q1 2026', 'Q2 2026', 'Q3 2026'],
        datasets: [{
          label: 'Avg Yield (tons)',
          data: [380, 420, 460, 510, 540, 590, 650],
          borderColor: CHART_COLORS.success,
          backgroundColor: 'rgba(16, 185, 129, 0.06)',
          tension: 0.4, fill: true, borderWidth: 2,
          pointRadius: 4, pointBackgroundColor: CHART_COLORS.success
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: false, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const efficiencyCtx = document.getElementById('droneEfficiencyChart');
  if (efficiencyCtx) {
    new Chart(efficiencyCtx, {
      type: 'bar',
      data: {
        labels: ['Spraying', 'Mapping', 'Surveying', 'Monitoring', 'Seeding'],
        datasets: [{
          label: 'Efficiency %', data: [92, 88, 95, 85, 78],
          backgroundColor: CHART_COLORS.primary, borderRadius: 4
        }]
      },
      options: {
        ...CHART_DEFAULTS, indexAxis: 'y',
        plugins: { legend: { display: false } },
        scales: {
          x: { beginAtZero: true, max: 100, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => v + '%', font: { size: 10 } } },
          y: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const revTrendCtx = document.getElementById('revenueTrendChart');
  if (revTrendCtx) {
    new Chart(revTrendCtx, {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug'],
        datasets: [{
          label: 'Revenue (₹L)',
          data: [8.5, 9.2, 10.8, 12.5, 11.8, 14.2, 13.5, 16.8],
          borderColor: CHART_COLORS.accent,
          backgroundColor: 'rgba(124, 179, 66, 0.06)',
          tension: 0.4, fill: true, borderWidth: 2,
          pointRadius: 3, pointBackgroundColor: CHART_COLORS.accent
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        plugins: { legend: { display: false } },
        scales: {
          y: { beginAtZero: false, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { callback: v => '₹' + v + 'L', font: { size: 10 } } },
          x: { grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }

  const fieldProdCtx = document.getElementById('fieldProductivityChart');
  if (fieldProdCtx) {
    new Chart(fieldProdCtx, {
      type: 'radar',
      data: {
        labels: ['Yield', 'Water Usage', 'Pest Control', 'Soil Health', 'Growth Rate', 'Harvest Quality'],
        datasets: [{
          label: 'This Season',
          data: [88, 75, 92, 85, 80, 90],
          borderColor: CHART_COLORS.accent,
          backgroundColor: 'rgba(124, 179, 66, 0.1)',
          borderWidth: 2, pointRadius: 3
        }, {
          label: 'Last Season',
          data: [72, 80, 78, 70, 68, 75],
          borderColor: CHART_COLORS.gray,
          backgroundColor: 'rgba(100, 116, 139, 0.05)',
          borderWidth: 2, pointRadius: 3
        }]
      },
      options: {
        ...CHART_DEFAULTS,
        scales: {
          r: { min: 0, max: 100, ticks: { stepSize: 20, font: { size: 9 } }, grid: { color: 'rgba(0,0,0,0.06)' } }
        }
      }
    });
  }

  const cropHealthTrCtx = document.getElementById('cropHealthTrendChart');
  if (cropHealthTrCtx) {
    new Chart(cropHealthTrCtx, {
      type: 'doughnut',
      data: {
        labels: ['Excellent', 'Good', 'Fair', 'Poor'],
        datasets: [{
          data: [45, 30, 18, 7],
          backgroundColor: [CHART_COLORS.success, CHART_COLORS.accent, CHART_COLORS.warning, CHART_COLORS.danger],
          borderWidth: 0, hoverOffset: 6
        }]
      },
      options: { ...CHART_DEFAULTS, cutout: '68%' }
    });
  }
}

/* ---- Schedules Page Charts ---- */
function initScheduleCharts() {
  const missionTypeCtx = document.getElementById('missionTypeChart');
  if (missionTypeCtx) {
    new Chart(missionTypeCtx, {
      type: 'doughnut',
      data: {
        labels: ['Spraying', 'Mapping', 'Surveillance', 'Seeding', 'Monitoring'],
        datasets: [{
          data: [35, 25, 20, 12, 8],
          backgroundColor: [CHART_COLORS.accent, CHART_COLORS.info, CHART_COLORS.warm, CHART_COLORS.purple, CHART_COLORS.orange],
          borderWidth: 0, hoverOffset: 6
        }]
      },
      options: { ...CHART_DEFAULTS, cutout: '68%' }
    });
  }

  const weeklyMissionCtx = document.getElementById('weeklyMissionChart');
  if (weeklyMissionCtx) {
    new Chart(weeklyMissionCtx, {
      type: 'bar',
      data: {
        labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
        datasets: [
          { label: 'Completed', data: [5, 8, 6, 9, 7, 3, 1], backgroundColor: CHART_COLORS.success, borderRadius: 4 },
          { label: 'Scheduled', data: [2, 3, 4, 2, 3, 5, 2], backgroundColor: CHART_COLORS.info, borderRadius: 4 }
        ]
      },
      options: {
        ...CHART_DEFAULTS,
        scales: {
          y: { beginAtZero: true, stacked: true, grid: { color: 'rgba(0,0,0,0.04)' }, ticks: { font: { size: 10 } } },
          x: { stacked: true, grid: { display: false }, ticks: { font: { size: 10 } } }
        }
      }
    });
  }
}

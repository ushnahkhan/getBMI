document.getElementById('year').textContent = new Date().getFullYear();

/* ---------- Tabs ---------- */
const tabBtns = document.querySelectorAll('.tab-btn');
const panels = document.querySelectorAll('.tab-panel');

tabBtns.forEach(btn => {
  btn.addEventListener('click', () => {
    tabBtns.forEach(b => { b.classList.remove('active'); b.setAttribute('aria-selected', 'false'); });
    panels.forEach(p => p.classList.remove('active'));
    btn.classList.add('active');
    btn.setAttribute('aria-selected', 'true');
    document.getElementById('panel-' + btn.dataset.tab).classList.add('active');
  });
});

/* ---------- Units ---------- */
let currentUnit = 'metric';
document.querySelectorAll('input[name="units"]').forEach(radio => {
  radio.addEventListener('change', (e) => {
    currentUnit = e.target.value;
    document.querySelectorAll('.metric-fields').forEach(el => el.classList.toggle('hidden', currentUnit !== 'metric'));
    document.querySelectorAll('.imperial-fields').forEach(el => el.classList.toggle('hidden', currentUnit !== 'imperial'));
  });
});

/* ---------- Helpers ---------- */
function getWeightKg(prefix) {
  if (currentUnit === 'metric') {
    return parseFloat(document.getElementById(prefix + '-weight-kg').value);
  }
  const lb = parseFloat(document.getElementById(prefix + '-weight-lb').value);
  return lb * 0.45359237;
}

function getHeightCm(prefix) {
  if (currentUnit === 'metric') {
    return parseFloat(document.getElementById(prefix + '-height-cm').value);
  }
  const ft = parseFloat(document.getElementById(prefix + '-height-ft').value) || 0;
  const inch = parseFloat(document.getElementById(prefix + '-height-in').value) || 0;
  return (ft * 12 + inch) * 2.54;
}

function bmiCategory(bmi) {
  if (bmi < 18.5) return { label: 'Underweight', key: 'under' };
  if (bmi < 25) return { label: 'Normal weight', key: 'normal' };
  if (bmi < 30) return { label: 'Overweight', key: 'over' };
  return { label: 'Obese', key: 'obese' };
}

/* ---------- BMI ---------- */
document.getElementById('bmi-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const weightKg = getWeightKg('bmi');
  const heightCm = getHeightCm('bmi');
  if (!weightKg || !heightCm) return;

  const heightM = heightCm / 100;
  const bmi = weightKg / (heightM * heightM);
  const cat = bmiCategory(bmi);

  document.getElementById('bmi-value').textContent = 'BMI: ' + bmi.toFixed(1);
  document.getElementById('bmi-category').textContent = cat.label;
  document.getElementById('bmi-result').hidden = false;

  // Marker position across scale: clamp bmi between 10 and 40 for display
  const clamped = Math.min(Math.max(bmi, 10), 40);
  const pct = ((clamped - 10) / (40 - 10)) * 100;
  document.getElementById('bmi-marker').style.left = pct + '%';
});

/* ---------- BMR (Mifflin-St Jeor) ---------- */
function calcBMR(weightKg, heightCm, age, sex) {
  const base = 10 * weightKg + 6.25 * heightCm - 5 * age;
  return sex === 'male' ? base + 5 : base - 161;
}

document.getElementById('bmr-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const weightKg = getWeightKg('bmr');
  const heightCm = getHeightCm('bmr');
  const age = parseFloat(document.getElementById('bmr-age').value);
  const sex = document.querySelector('input[name="bmr-sex"]:checked').value;
  if (!weightKg || !heightCm || !age) return;

  const bmr = calcBMR(weightKg, heightCm, age, sex);
  document.getElementById('bmr-value').textContent = Math.round(bmr) + ' kcal/day';
  document.getElementById('bmr-result').hidden = false;
});

/* ---------- Daily Calories (TDEE) ---------- */
document.getElementById('calories-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const weightKg = getWeightKg('cal');
  const heightCm = getHeightCm('cal');
  const age = parseFloat(document.getElementById('cal-age').value);
  const sex = document.querySelector('input[name="cal-sex"]:checked').value;
  const activity = parseFloat(document.getElementById('cal-activity').value);
  if (!weightKg || !heightCm || !age) return;

  const bmr = calcBMR(weightKg, heightCm, age, sex);
  const tdee = bmr * activity;

  document.getElementById('calories-value').textContent = Math.round(tdee) + ' kcal/day';
  document.getElementById('calories-breakdown').innerHTML =
    'Mild weight loss (~0.25 kg/week): ' + Math.round(tdee - 250) + ' kcal/day<br>' +
    'Weight loss (~0.5 kg/week): ' + Math.round(tdee - 500) + ' kcal/day<br>' +
    'Mild weight gain: ' + Math.round(tdee + 250) + ' kcal/day';
  document.getElementById('calories-result').hidden = false;
});

/* ---------- Ideal Weight Range (BMI 18.5-24.9 band) ---------- */
document.getElementById('ideal-form').addEventListener('submit', (e) => {
  e.preventDefault();
  const heightCm = getHeightCm('ideal');
  if (!heightCm) return;

  const heightM = heightCm / 100;
  let lowKg = 18.5 * heightM * heightM;
  let highKg = 24.9 * heightM * heightM;

  let text;
  if (currentUnit === 'metric') {
    text = lowKg.toFixed(1) + ' – ' + highKg.toFixed(1) + ' kg';
  } else {
    const lowLb = lowKg / 0.45359237;
    const highLb = highKg / 0.45359237;
    text = lowLb.toFixed(1) + ' – ' + highLb.toFixed(1) + ' lb';
  }

  document.getElementById('ideal-value').textContent = text;
  document.getElementById('ideal-result').hidden = false;
});

/* ============================================================
   ADSENSE AUTO ADS (activate after your AdSense account is approved)
   Uncomment and replace the data-ad-client / data-ad-slot values
   in index.html's ad-slot divs, or use auto ads via the script
   tag in the <head>. See the deployment guide for details.
   ============================================================ */

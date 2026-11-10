const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');
const year = document.querySelector('#year');
const MAX_DIGITAL_PAYMENT = 5000000;
const calendarDays = document.getElementById('calendarDays');
const calendarMonthLabel = document.getElementById('calendarMonthLabel');
const calendarPrevious = document.getElementById('calendarPrevious');
const calendarNext = document.getElementById('calendarNext');
const appointmentDate = document.getElementById('appointmentDate');
const appointmentSlot = document.getElementById('appointmentSlot');
const selectedDateLabel = document.getElementById('selectedDateLabel');
const availableTimeSlots = document.getElementById('availableTimeSlots');
const calendarStatusMessage = document.getElementById('calendarStatus');
const WHATSAPP_NUMBER = '393512368628';
const FACEBOOK_URL = 'https://www.facebook.com/noviasolutions.it/';
if (!document.querySelector('.whatsapp-float')) {
  const whatsappLink = document.createElement('a');
  whatsappLink.className = 'whatsapp-float';
  whatsappLink.href = `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent('Bonjour NOVIA SOLUTIONS, je souhaite avoir des informations.')}`;
  whatsappLink.target = '_blank';
  whatsappLink.rel = 'noopener noreferrer';
  whatsappLink.setAttribute('aria-label', 'WhatsApp');
  whatsappLink.innerHTML = '<svg viewBox="0 0 32 32" aria-hidden="true"><path d="M16.003 3C8.83 3 3.003 8.826 3.003 16c0 2.292.6 4.53 1.737 6.5L3 29l6.673-1.7A12.94 12.94 0 0 0 16.003 29C23.177 29 29 23.174 29 16S23.177 3 16.003 3zm0 23.8a10.77 10.77 0 0 1-5.5-1.5l-.395-.234-3.96 1.01 1.057-3.86-.257-.4A10.77 10.77 0 0 1 5.2 16c0-5.95 4.85-10.8 10.803-10.8S26.8 10.05 26.8 16s-4.847 10.8-10.797 10.8zm5.92-8.08c-.325-.162-1.92-.947-2.217-1.055-.297-.108-.513-.162-.73.163-.216.325-.838 1.055-1.027 1.27-.19.217-.378.244-.703.082-.325-.163-1.372-.506-2.613-1.612-.966-.862-1.617-1.926-1.807-2.25-.19-.326-.02-.502.143-.664.146-.146.325-.38.487-.57.163-.19.217-.325.325-.542.108-.216.054-.406-.027-.568-.081-.163-.73-1.76-1-2.41-.264-.633-.532-.547-.73-.557l-.62-.01c-.217 0-.568.081-.865.406-.297.325-1.135 1.11-1.135 2.707 0 1.597 1.162 3.14 1.325 3.357.163.217 2.287 3.493 5.54 4.898.774.334 1.378.533 1.85.683.777.247 1.484.212 2.043.129.623-.093 1.92-.785 2.19-1.543.27-.757.27-1.406.19-1.542-.08-.136-.297-.217-.622-.38z"/></svg>';
  const footer = document.querySelector('footer');
  if (footer) {
    footer.style.position = 'relative';
    footer.append(whatsappLink);
  } else {
    document.body.append(whatsappLink);
  }
}

if (!document.querySelector('.facebook-float')) {
  const facebookLink = document.createElement('a');
  facebookLink.className = 'facebook-float';
  facebookLink.href = FACEBOOK_URL;
  facebookLink.target = '_blank';
  facebookLink.rel = 'noopener noreferrer';
  facebookLink.setAttribute('aria-label', 'Facebook');
  facebookLink.innerHTML = '<svg viewBox="0 0 320 512" aria-hidden="true"><path d="M279.14 288l14.22-92.66h-88.91v-60.13c0-25.35 12.42-50.06 52.24-50.06h40.42V6.26S260.43 0 225.36 0c-73.22 0-121.08 44.38-121.08 124.72v70.62H22.89V288h81.39v224h100.17V288z"/></svg>';
  const footer = document.querySelector('footer');
  if (footer) {
    footer.style.position = 'relative';
    footer.append(facebookLink);
  } else {
    document.body.append(facebookLink);
  }
}

const translate = (text) => window.NoviaI18n?.t(text) || text;
const currentLocale = () => window.NoviaI18n?.locale || 'fr-FR';

const currencyInputs = document.querySelectorAll('.flexible-budget input[type="number"]');
const currencyLinks = Array.from(document.querySelectorAll('a[href*="budget="]:not([data-flexible-offer])'))
  .map((link) => ({ link, href: link.getAttribute('href') }));

function updateCurrencyControls(previousCurrency = 'EUR') {
  if (!window.NoviaI18n) return;
  const currency = window.NoviaI18n.currency;
  const rate = window.NoviaI18n.currencyRate;
  currencyInputs.forEach((input) => {
    if (!(input instanceof HTMLInputElement)) return;
    if (!input.dataset.euroMinimum) input.dataset.euroMinimum = input.min;
    const minimum = Number(input.dataset.euroMinimum);
    const value = input.value === '' ? null : Number(input.value);
    input.min = String(currency === 'XOF' ? Math.round(minimum * rate) : minimum);
    input.step = currency === 'XOF' ? '1' : '0.01';
    if (value !== null && previousCurrency !== currency) {
      input.value = String(currency === 'XOF' ? Math.round(value * rate) : Math.round((value / rate) * 100) / 100);
    }
    input.setCustomValidity('');
  });
  currencyLinks.forEach(({ link, href }) => {
    const url = new URL(href, window.location.href);
    if (currency === 'XOF') {
      ['budget', 'message'].forEach((key) => {
        const value = url.searchParams.get(key);
        if (value) url.searchParams.set(key, window.NoviaI18n.convertPriceText(value));
      });
    }
    link.setAttribute('href', `${url.pathname.split('/').pop()}${url.search}${url.hash}`);
  });
}

updateCurrencyControls();
window.addEventListener('novia:currencychange', (event) => updateCurrencyControls(event.detail.previousCurrency));

const BUSINESS_TIMEZONE = 'Europe/Paris';
const PHONE_TIMEZONES = {
  '1': 'America/New_York', '7': 'Europe/Moscow', '20': 'Africa/Cairo', '32': 'Europe/Brussels',
  '33': 'Europe/Paris', '34': 'Europe/Madrid', '39': 'Europe/Rome', '41': 'Europe/Zurich',
  '44': 'Europe/London', '49': 'Europe/Berlin', '55': 'America/Sao_Paulo', '86': 'Asia/Shanghai',
  '90': 'Europe/Istanbul', '91': 'Asia/Kolkata', '212': 'Africa/Casablanca', '213': 'Africa/Algiers',
  '216': 'Africa/Tunis', '221': 'Africa/Dakar', '223': 'Africa/Bamako', '224': 'Africa/Conakry',
  '225': 'Africa/Abidjan', '226': 'Africa/Ouagadougou', '227': 'Africa/Niamey', '228': 'Africa/Lome',
  '229': 'Africa/Porto-Novo', '233': 'Africa/Accra', '234': 'Africa/Lagos', '235': 'Africa/Ndjamena',
  '236': 'Africa/Bangui', '237': 'Africa/Douala', '241': 'Africa/Libreville', '242': 'Africa/Brazzaville',
  '243': 'Africa/Kinshasa', '971': 'Asia/Dubai'
};

function isValidTimeZone(zone) {
  try {
    new Intl.DateTimeFormat('fr-FR', { timeZone: zone });
    return true;
  } catch (error) {
    return false;
  }
}

const browserTimeZone = (() => {
  const zone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return zone && isValidTimeZone(zone) ? zone : BUSINESS_TIMEZONE;
})();
let clientTimeZone = browserTimeZone;

function timeZoneFromPhone(phone) {
  const digits = String(phone || '').trim().replace(/^00/, '+');
  if (!digits.startsWith('+')) return null;
  const number = digits.replace(/\D/g, '');
  for (let length = 3; length >= 1; length -= 1) {
    const zone = PHONE_TIMEZONES[number.slice(0, length)];
    if (zone) return zone;
  }
  return null;
}

function timeZoneOffsetMs(timestamp, timeZone) {
  const parts = Object.fromEntries(new Intl.DateTimeFormat('en-US', {
    timeZone,
    hourCycle: 'h23',
    year: 'numeric',
    month: '2-digit',
    day: '2-digit',
    hour: '2-digit',
    minute: '2-digit',
    second: '2-digit'
  }).formatToParts(new Date(timestamp)).map((part) => [part.type, part.value]));
  const asUtc = Date.UTC(+parts.year, +parts.month - 1, +parts.day, +parts.hour, +parts.minute, +parts.second);
  return asUtc - Math.floor(timestamp / 1000) * 1000;
}

function businessTimeToDate(dateValue, timeValue) {
  const [yearPart, monthPart, dayPart] = dateValue.split('-').map(Number);
  const [hourPart, minutePart] = timeValue.split(':').map(Number);
  const wallClock = Date.UTC(yearPart, monthPart - 1, dayPart, hourPart, minutePart);
  let timestamp = wallClock - timeZoneOffsetMs(wallClock, BUSINESS_TIMEZONE);
  timestamp = wallClock - timeZoneOffsetMs(timestamp, BUSINESS_TIMEZONE);
  return new Date(timestamp);
}

function formatClientSlot(dateValue, slot) {
  if (clientTimeZone === BUSINESS_TIMEZONE) return slot;
  const formatter = new Intl.DateTimeFormat(currentLocale(), {
    timeZone: clientTimeZone,
    hour: '2-digit',
    minute: '2-digit',
    hourCycle: 'h23'
  });
  const [start, end] = slot.split(' - ');
  return `${formatter.format(businessTimeToDate(dateValue, start))} - ${formatter.format(businessTimeToDate(dateValue, end))}`;
}

function updateTimeZoneNote() {
  if (!availableTimeSlots) return;
  let note = document.getElementById('timezoneNote');
  if (!note) {
    note = document.createElement('p');
    note.id = 'timezoneNote';
    note.className = 'timezone-note';
    availableTimeSlots.before(note);
  }
  note.textContent = clientTimeZone === BUSINESS_TIMEZONE
    ? `${translate('Horaires affichés à l’heure de Paris')} (${BUSINESS_TIMEZONE}).`
    : `${translate('Horaires affichés dans votre fuseau')} : ${clientTimeZone.replace(/_/g, ' ')} — ${translate('heure de Paris entre parenthèses')}.`;
}

function setClientTimeZone(zone) {
  if (!zone || zone === clientTimeZone) return;
  clientTimeZone = zone;
  updateTimeZoneNote();
  if (appointmentDate?.value) {
    const [yearValue, monthValue, dayValue] = appointmentDate.value.split('-').map(Number);
    const selectedSlot = appointmentSlot?.value;
    renderAvailableSlots(new Date(yearValue, monthValue - 1, dayValue));
    if (selectedSlot) {
      const match = [...availableTimeSlots.querySelectorAll('.time-slot')].find((button) => button.dataset.slot === selectedSlot);
      match?.click();
    }
  }
}

document.querySelector('#appointmentForm input[name="phone"]')?.addEventListener('input', (event) => {
  setClientTimeZone(timeZoneFromPhone(event.target.value) || browserTimeZone);
});

const today = new Date();
today.setHours(0, 0, 0, 0);
let calendarMonth = new Date(today.getFullYear(), today.getMonth(), 1);
let availabilityByDate = new Map();
let availabilityLoaded = false;
let availabilityRequest = 0;

function dateKey(date) {
  const yearValue = date.getFullYear();
  const monthValue = String(date.getMonth() + 1).padStart(2, '0');
  const dayValue = String(date.getDate()).padStart(2, '0');
  return `${yearValue}-${monthValue}-${dayValue}`;
}

function renderAvailableSlots(date) {
  if (!availableTimeSlots || !appointmentSlot) return;

  appointmentSlot.value = '';
  availableTimeSlots.replaceChildren();

  const slots = availabilityByDate.get(dateKey(date)) || [];
  if (slots.length === 0) {
    availableTimeSlots.innerHTML = `<p>${translate(availabilityLoaded ? 'Aucun créneau disponible ce jour. Choisissez une autre date.' : 'Les disponibilités ne sont pas chargées.')}</p>`;
    return;
  }

  slots.forEach((slot) => {
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'time-slot';
    button.textContent = clientTimeZone === BUSINESS_TIMEZONE
      ? slot
      : `${formatClientSlot(dateKey(date), slot)} (Paris ${slot})`;
    button.dataset.slot = slot;
    button.setAttribute('aria-pressed', 'false');
    button.addEventListener('click', () => {
      availableTimeSlots.querySelectorAll('.time-slot').forEach((timeSlot) => {
        timeSlot.classList.remove('selected');
        timeSlot.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('selected');
      button.setAttribute('aria-pressed', 'true');
      appointmentSlot.value = slot;
    });
    availableTimeSlots.append(button);
  });
}

function clearAppointmentSelection() {
  if (appointmentDate) appointmentDate.value = '';
  if (appointmentSlot) appointmentSlot.value = '';
  if (selectedDateLabel) selectedDateLabel.textContent = translate('Aucune date sélectionnée');
  if (availableTimeSlots) availableTimeSlots.innerHTML = `<p>${translate('Sélectionnez une date dans le calendrier.')}</p>`;
}

async function loadCalendarAvailability(advanceIfEmpty = false) {
  if (!calendarDays) return;

  const requestId = ++availabilityRequest;
  const yearValue = calendarMonth.getFullYear();
  const monthValue = String(calendarMonth.getMonth() + 1).padStart(2, '0');
  const monthKey = `${yearValue}-${monthValue}`;

  availabilityLoaded = false;
  availabilityByDate = new Map();
  renderCalendar();
  if (calendarStatusMessage) calendarStatusMessage.textContent = translate('Chargement des disponibilités Google Calendar…');

  try {
    const response = await fetch(`/api/calendar/availability?month=${monthKey}`);
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || 'Impossible de charger les disponibilités.');
    if (requestId !== availabilityRequest) return;

    availabilityByDate = new Map(result.days.map((day) => [day.date, day.slots]));
    availabilityLoaded = true;

    const isCurrentMonth = calendarMonth.getFullYear() === today.getFullYear()
      && calendarMonth.getMonth() === today.getMonth();
    if (advanceIfEmpty && isCurrentMonth && availabilityByDate.size === 0) {
      calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1);
      await loadCalendarAvailability();
      return;
    }

    if (calendarStatusMessage) {
      calendarStatusMessage.textContent = translate('Créneaux libres synchronisés avec Google Calendar. L’invitation sera envoyée par e-mail après réservation.');
    }
    renderCalendar();
  } catch (error) {
    if (requestId !== availabilityRequest) return;
    availabilityLoaded = false;
    availabilityByDate = new Map();
    if (calendarStatusMessage) {
      calendarStatusMessage.textContent = translate(error.message || 'Agenda Google Calendar indisponible. Réessayez plus tard.');
    }
    renderCalendar();
  }
}

function renderCalendar() {
  if (!calendarDays || !calendarMonthLabel) return;

  const yearValue = calendarMonth.getFullYear();
  const monthValue = calendarMonth.getMonth();
  const firstDay = new Date(yearValue, monthValue, 1);
  const daysInMonth = new Date(yearValue, monthValue + 1, 0).getDate();
  const startOffset = (firstDay.getDay() + 6) % 7;

  calendarMonthLabel.textContent = new Intl.DateTimeFormat(currentLocale(), {
    month: 'long',
    year: 'numeric'
  }).format(calendarMonth);

  calendarDays.replaceChildren();

  for (let blankDay = 0; blankDay < startOffset; blankDay += 1) {
    const spacer = document.createElement('span');
    spacer.className = 'calendar-spacer';
    spacer.setAttribute('aria-hidden', 'true');
    calendarDays.append(spacer);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(yearValue, monthValue, day);
    const dateValue = dateKey(date);
    const slots = availabilityByDate.get(dateValue) || [];
    const button = document.createElement('button');
    button.type = 'button';
    button.className = 'calendar-day';
    button.textContent = String(day);
    button.setAttribute('aria-label', new Intl.DateTimeFormat(currentLocale(), {
      dateStyle: 'full'
    }).format(date));
    button.disabled = !availabilityLoaded || slots.length === 0;

    if (slots.length > 0) button.classList.add('has-availability');
    if (appointmentDate && appointmentDate.value === dateValue) {
      button.classList.add('selected');
      button.setAttribute('aria-pressed', 'true');
    } else {
      button.setAttribute('aria-pressed', 'false');
    }

    button.addEventListener('click', () => {
      if (!appointmentDate || !selectedDateLabel) return;
      appointmentDate.value = dateValue;
      selectedDateLabel.textContent = new Intl.DateTimeFormat(currentLocale(), {
        dateStyle: 'full'
      }).format(date);
      calendarDays.querySelectorAll('.calendar-day.selected').forEach((selectedDay) => {
        selectedDay.classList.remove('selected');
        selectedDay.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('selected');
      button.setAttribute('aria-pressed', 'true');
      renderAvailableSlots(date);
    });

    calendarDays.append(button);
  }

  if (calendarPrevious) {
    calendarPrevious.disabled = yearValue === today.getFullYear() && monthValue <= today.getMonth();
  }
}

if (calendarDays) {
  updateTimeZoneNote();
  renderCalendar();
  loadCalendarAvailability(true);

  if (calendarPrevious) {
    calendarPrevious.addEventListener('click', () => {
      calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() - 1, 1);
      clearAppointmentSelection();
      loadCalendarAvailability();
    });
  }

  if (calendarNext) {
    calendarNext.addEventListener('click', () => {
      calendarMonth = new Date(calendarMonth.getFullYear(), calendarMonth.getMonth() + 1, 1);
      clearAppointmentSelection();
      loadCalendarAvailability();
    });
  }
}

window.addEventListener('novia:languagechange', () => {
  if (!calendarDays) return;
  renderCalendar();

  if (appointmentDate?.value && selectedDateLabel) {
    const selectedDate = new Date(`${appointmentDate.value}T00:00:00`);
    selectedDateLabel.textContent = new Intl.DateTimeFormat(currentLocale(), {
      dateStyle: 'full'
    }).format(selectedDate);
  }
});

async function submitAppointment(form, successMessage) {
  if (!appointmentDate?.value || !appointmentSlot?.value) {
    if (successMessage) successMessage.textContent = translate('Choisissez une date et un créneau dans le calendrier.');
    return;
  }

  const payload = Object.fromEntries(new FormData(form).entries());
  payload.clientTimezone = clientTimeZone;
  try {
    const response = await fetch('/api/appointments', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload)
    });
    const result = await response.json().catch(() => ({}));
    if (!response.ok) throw new Error(result.error || 'La réservation n’a pas abouti.');

    if (successMessage) {
      successMessage.textContent = translate('Rendez-vous confirmé dans Google Calendar. Une invitation a été envoyée par e-mail.');
    }
    form.reset();
    clearAppointmentSelection();
    await loadCalendarAvailability();
  } catch (error) {
    if (successMessage) {
      successMessage.textContent = translate(error.message || 'Connexion au calendrier impossible. Réessayez plus tard.');
    }
  }
}

const paymentButtons = document.querySelectorAll('.payment-trigger');
const paymentModal = document.getElementById('paymentModal');
const paymentForm = document.getElementById('paymentForm');
const paymentFormStep = document.getElementById('paymentFormStep');
const smsStep = document.getElementById('smsStep');
const paymentSuccess = document.getElementById('paymentSuccess');
const paymentError = document.getElementById('paymentError');
const smsError = document.getElementById('smsError');
const paymentServiceInput = document.getElementById('paymentService');
const paymentAmountInput = document.getElementById('paymentAmount');
const paymentPhoneInput = document.getElementById('paymentPhone');
const smsCodeDisplay = document.getElementById('smsCodeDisplay');
const smsMessage = document.getElementById('smsMessage');
const successService = document.getElementById('successService');
const successAmount = document.getElementById('successAmount');
const smsForm = document.getElementById('smsForm');

let currentSmsCode = '';

function resetPaymentState() {
  if (!paymentForm || !smsForm) return;

  paymentForm.reset();
  smsForm.reset();
  paymentFormStep.classList.remove('hidden');
  smsStep.classList.add('hidden');
  paymentSuccess.classList.add('hidden');

  if (paymentError) paymentError.textContent = '';
  if (smsError) smsError.textContent = '';
  currentSmsCode = '';
}

function closePaymentModal() {
  if (!paymentModal) return;

  paymentModal.classList.remove('open');
  paymentModal.setAttribute('aria-hidden', 'true');
  resetPaymentState();
}

function openPaymentModal(serviceName, amountValue) {
  if (!paymentModal || !paymentServiceInput || !paymentAmountInput) return;

  resetPaymentState();
  paymentServiceInput.value = serviceName || 'Service NOVIA';
  paymentAmountInput.value = amountValue ? String(Math.round(Number(amountValue) * window.NoviaI18n.currencyRate)) : '';
  paymentModal.classList.add('open');
  paymentModal.setAttribute('aria-hidden', 'false');
  if (paymentPhoneInput) paymentPhoneInput.focus();
}

function formatAmount(value) {
  return new Intl.NumberFormat(currentLocale()).format(value) + ' FCFA';
}

if (paymentButtons.length) {
  paymentButtons.forEach((button) => {
    button.addEventListener('click', () => {
      openPaymentModal(button.dataset.paymentService, button.dataset.paymentAmount);
    });
  });
}

if (paymentModal) {
  paymentModal.addEventListener('click', (event) => {
    if (event.target && event.target.hasAttribute('data-close-payment')) {
      closePaymentModal();
    }
  });

  const modalCloseButton = document.querySelector('.close-modal');
  if (modalCloseButton) {
    modalCloseButton.addEventListener('click', closePaymentModal);
  }

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && paymentModal.classList.contains('open')) {
      closePaymentModal();
    }
  });
}

if (paymentForm) {
  paymentForm.addEventListener('submit', (event) => {
    event.preventDefault();

    if (!paymentAmountInput || !paymentServiceInput || !paymentPhoneInput) return;

    const serviceName = paymentServiceInput.value.trim();
    const amount = Number(paymentAmountInput.value);
    const phone = paymentPhoneInput.value.trim();

    if (!serviceName || !phone || !amount || amount <= 0) {
      if (paymentError) paymentError.textContent = translate('Veuillez remplir tous les champs avant de continuer.');
      return;
    }

    if (amount > MAX_DIGITAL_PAYMENT) {
      if (paymentError) paymentError.textContent = translate('Le montant maximum autorisé est de 5 000 000 FCFA (environ 8 000 €).');
      return;
    }

    currentSmsCode = String(Math.floor(100000 + Math.random() * 900000));

    if (smsMessage) {
      smsMessage.textContent = translate('Un code de sécurité a été envoyé au {phone}.').replace('{phone}', phone);
    }

    if (smsCodeDisplay) {
      smsCodeDisplay.textContent = currentSmsCode;
    }

    if (paymentError) paymentError.textContent = '';
    paymentFormStep.classList.add('hidden');
    smsStep.classList.remove('hidden');

    const smsInput = document.getElementById('smsCodeInput');
    if (smsInput) smsInput.focus();
  });
}

if (smsForm) {
  smsForm.addEventListener('submit', (event) => {
    event.preventDefault();

    const smsInput = document.getElementById('smsCodeInput');
    const enteredCode = smsInput ? smsInput.value.trim() : '';

    if (!enteredCode) {
      if (smsError) smsError.textContent = translate('Entrez le code reçu par SMS pour continuer.');
      return;
    }

    if (enteredCode !== currentSmsCode) {
      if (smsError) smsError.textContent = translate('Code incorrect. Vérifiez le code envoyé par SMS.');
      return;
    }

    if (smsError) smsError.textContent = '';
    if (paymentServiceInput && successService) {
      successService.textContent = paymentServiceInput.value.trim();
    }

    const validatedAmount = Number(paymentAmountInput ? paymentAmountInput.value : 0);
    if (successAmount) {
      successAmount.textContent = formatAmount(validatedAmount);
    }

    smsStep.classList.add('hidden');
    paymentSuccess.classList.remove('hidden');
  });
}

document.querySelectorAll('[data-flexible-offer]').forEach((link) => {
  link.addEventListener('click', (event) => {
    const card = link.closest('.price-card');
    const budgetInput = card && card.querySelector('input[type="number"]');
    if (!(budgetInput instanceof HTMLInputElement) || !budgetInput.reportValidity()) {
      event.preventDefault();
      return;
    }

    const budget = Number(budgetInput.value);
    const minimumBudget = Number(budgetInput.min);
    if (!Number.isFinite(budget) || budget < minimumBudget) {
      event.preventDefault();
      const minimumText = `${minimumBudget} ${window.NoviaI18n.currency === 'XOF' ? 'FCFA' : '€'}`;
      budgetInput.setCustomValidity(translate('Le budget minimum pour cette formule est de {amount}.').replace('{amount}', minimumText));
      budgetInput.reportValidity();
      budgetInput.addEventListener('input', () => budgetInput.setCustomValidity(''), { once: true });
      return;
    }

    const subject = link.dataset.subject || 'Formule personnalisée';
    const budgetText = `${budget} ${window.NoviaI18n.currency === 'XOF' ? 'FCFA' : '€'}`;
    const query = new URLSearchParams({
      service: 'Accompagnement business',
      subject,
      budget: budgetText,
      message: `Je souhaite étudier la formule ${subject} avec un budget indicatif de ${budgetText}.`
    });
    link.href = `contact.html?${query.toString()}`;
  });
});

if (year) {
  year.textContent = new Date().getFullYear();
}

if (navToggle && mainNav) {
  const menuInactivityDelay = 8000;
  let menuInactivityTimeout;

  const closeMenu = () => {
    mainNav.classList.remove('open');
    navToggle.setAttribute('aria-expanded', 'false');
    window.clearTimeout(menuInactivityTimeout);
  };

  const resetMenuInactivityTimeout = () => {
    window.clearTimeout(menuInactivityTimeout);
    menuInactivityTimeout = window.setTimeout(closeMenu, menuInactivityDelay);
  };

  navToggle.setAttribute('aria-expanded', 'false');
  navToggle.addEventListener('click', () => {
    if (mainNav.classList.contains('open')) {
      closeMenu();
      return;
    }

    mainNav.classList.add('open');
    navToggle.setAttribute('aria-expanded', 'true');
    resetMenuInactivityTimeout();
  });

  mainNav.addEventListener('pointerdown', resetMenuInactivityTimeout);
  mainNav.addEventListener('keydown', resetMenuInactivityTimeout);
  mainNav.addEventListener('focusin', resetMenuInactivityTimeout);
  mainNav.addEventListener('click', (event) => {
    if (event.target.closest('a')) closeMenu();
  });

  document.addEventListener('pointerdown', (event) => {
    if (!mainNav.contains(event.target) && !navToggle.contains(event.target)) {
      closeMenu();
    }
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && mainNav.classList.contains('open')) {
      closeMenu();
      navToggle.focus();
    }
  });
}

if (document.querySelector('.site-header') && !document.querySelector('.landing-page-body')) {
  const backButton = document.createElement('button');
  backButton.type = 'button';
  backButton.className = 'site-back-button';
  backButton.setAttribute('aria-label', 'Revenir à la page précédente');
  backButton.title = 'Revenir à la page précédente';
  backButton.innerHTML = '<span aria-hidden="true">←</span><span>Retour</span>';
  backButton.addEventListener('click', () => {
    let referrerIsInternal = false;
    if (document.referrer) {
      try {
        referrerIsInternal = new URL(document.referrer).origin === window.location.origin;
      } catch {
        referrerIsInternal = false;
      }
    }

    if (referrerIsInternal && window.history.length > 1) {
      window.history.back();
      return;
    }

    window.location.assign('index.html');
  });
  document.body.classList.add('has-site-back-button');
  document.body.append(backButton);
}

const airportCarousel = document.querySelector('[data-airport-carousel]');
if (airportCarousel instanceof HTMLElement) {
  const airportImage = airportCarousel.querySelector('.airport-photo');
  const airportCaption = airportCarousel.querySelector('.airport-caption');
  const airportFrame = airportCarousel.querySelector('.airport-photo-frame');
  const airportToggle = document.querySelector('[data-airport-toggle]');
  const airportSlides = [
    {
      src: 'assets/airport-heathrow.jpg',
      alt: "Hall du terminal 2 de l'aéroport de Heathrow à Londres",
      caption: 'Aéroport de Heathrow · Londres, Europe',
    },
    {
      src: 'assets/airport-frankfurt.jpg',
      alt: "Avion au départ de l'aéroport de Francfort, photographié depuis le terminal 2",
      caption: 'Aéroport de Francfort · Allemagne, Europe',
    },
    {
      src: 'assets/airport-dubai.jpg',
      alt: "Hall du terminal 3 de l'aéroport international de Dubaï",
      caption: 'Aéroport international de Dubaï',
    },
    {
      src: 'assets/airport-istanbul.jpg',
      alt: "Hall de l'aéroport d'Istanbul à Arnavutköy",
      caption: "Aéroport d'Istanbul · Turquie",
    },
    {
      src: 'assets/airport-malpensa.jpg',
      alt: "Zone d'enregistrement de l'aéroport de Milan Malpensa",
      caption: 'Aéroport de Milan Malpensa · Italie',
    },
    {
      src: 'assets/airport-linate.jpg',
      alt: "Terminal de l'aéroport de Milan Linate",
      caption: 'Aéroport de Milan Linate · Italie',
    },
    {
      src: 'assets/airport-bamako.jpg',
      alt: "Entrée du terminal de l'aéroport international de Bamako-Sénou",
      caption: 'Aéroport de Bamako-Sénou · Mali, Afrique',
    },
    {
      src: 'assets/airport-casablanca.jpg',
      alt: "Intérieur de l'aéroport international Mohammed V de Casablanca",
      caption: 'Aéroport Mohammed V · Casablanca, Maroc',
    },
    {
      src: 'assets/airport-ouagadougou.jpg',
      alt: "Avions d'Air Burkina devant la tour de contrôle de l'aéroport de Ouagadougou",
      caption: 'Aéroport de Ouagadougou · Burkina Faso',
    },
    {
      src: 'assets/airport-dakar.jpg',
      alt: "Aéroport international Blaise Diagne près de Dakar",
      caption: 'Aéroport Blaise Diagne · Dakar, Sénégal',
    },
    {
      src: 'assets/airport-abidjan.jpg',
      alt: "Hall de l'aéroport Félix-Houphouët-Boigny d'Abidjan",
      caption: "Aéroport d'Abidjan · Côte d'Ivoire",
    },
    {
      src: 'assets/airport-addis.jpg',
      alt: "Aéroport international Bole d'Addis-Abeba",
      caption: 'Aéroport de Bole · Addis-Abeba, Éthiopie',
    },
  ];
  const reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
  let activeAirportIndex = 0;
  let airportTimer = null;
  let airportPaused = reducedMotion;

  function updateAirportToggle() {
    if (!(airportToggle instanceof HTMLButtonElement)) return;
    airportToggle.setAttribute('aria-pressed', String(airportPaused));
    airportToggle.textContent = airportPaused
      ? 'Lancer le diaporama'
      : 'Mettre le diaporama en pause';
  }

  function showRandomAirport() {
    if (!(airportImage instanceof HTMLImageElement)
      || !(airportCaption instanceof HTMLElement)
      || !(airportFrame instanceof HTMLElement)) return;

    let nextIndex = Math.floor(Math.random() * airportSlides.length);
    while (nextIndex === activeAirportIndex) {
      nextIndex = Math.floor(Math.random() * airportSlides.length);
    }

    const nextSlide = airportSlides[nextIndex];
    const preloadedImage = new Image();
    preloadedImage.addEventListener('load', () => {
      airportFrame.classList.add('is-changing');
      window.setTimeout(() => {
        airportImage.src = nextSlide.src;
        if (window.NoviaI18n) {
          window.NoviaI18n.setTranslatedAttribute(airportImage, 'alt', nextSlide.alt);
        } else {
          airportImage.alt = nextSlide.alt;
        }
        airportCaption.textContent = nextSlide.caption;
        airportFrame.classList.remove('is-changing');
        activeAirportIndex = nextIndex;
      }, 450);
    }, { once: true });
    preloadedImage.addEventListener('error', () => {
      airportCaption.textContent = 'Impossible de charger la photo de cet aéroport.';
    }, { once: true });
    preloadedImage.src = nextSlide.src;
  }

  function updateAirportTimer() {
    if (airportTimer !== null) {
      window.clearInterval(airportTimer);
      airportTimer = null;
    }
    if (!airportPaused) airportTimer = window.setInterval(showRandomAirport, 6500);
    updateAirportToggle();
  }

  if (airportToggle instanceof HTMLButtonElement) {
    airportToggle.addEventListener('click', () => {
      airportPaused = !airportPaused;
      updateAirportTimer();
    });
  }

  updateAirportTimer();
}

const forms = document.querySelectorAll('[data-form]');
const contactForm = document.querySelector('[data-form="contact"]');

function updateSelectedContactFiles() {
  if (!contactForm) return;

  const fileInput = contactForm.querySelector('[name="files"]');
  const fileList = document.getElementById('selectedFiles');
  const fileError = document.getElementById('contactFileError');
  if (!(fileInput instanceof HTMLInputElement) || !fileList || !fileError) return;

  fileError.textContent = '';
  fileList.replaceChildren();
  const files = Array.from(fileInput.files || []);
  if (files.length === 0) {
    const emptyItem = document.createElement('li');
    emptyItem.textContent = 'Aucun fichier sélectionné.';
    fileList.append(emptyItem);
    return;
  }

  files.forEach((file) => {
    const item = document.createElement('li');
    item.textContent = `${file.name} (${(file.size / (1024 * 1024)).toFixed(2)} Mo)`;
    fileList.append(item);
  });
}

async function submitContactRequest(form, submitButton, statusMessage) {
  const fileInput = form.querySelector('[name="files"]');
  const fileError = document.getElementById('contactFileError');
  const files = fileInput instanceof HTMLInputElement ? Array.from(fileInput.files || []) : [];
  const allowedExtensions = new Set(['pdf', 'jpg', 'jpeg', 'png', 'docx']);
  const totalSize = files.reduce((total, file) => total + file.size, 0);

  if (files.length > 5) {
    if (fileError) fileError.textContent = 'Vous pouvez joindre au maximum 5 fichiers.';
    return;
  }
  if (files.some((file) => !allowedExtensions.has(file.name.split('.').pop().toLowerCase()))) {
    if (fileError) fileError.textContent = 'Formats acceptés : PDF, JPG, PNG et DOCX.';
    return;
  }
  if (totalSize > 12 * 1024 * 1024) {
    if (fileError) fileError.textContent = 'La taille totale des pièces jointes ne doit pas dépasser 12 Mo.';
    return;
  }
  if (fileError) fileError.textContent = '';
  if (statusMessage) {
    statusMessage.classList.remove('form-message-error');
    statusMessage.textContent = 'Envoi de votre demande…';
  }
  submitButton.disabled = true;

  try {
    const response = await fetch(form.action || '/api/contact-requests', {
      method: 'POST',
      body: new FormData(form),
    });
    let result = null;
    try {
      result = await response.json();
    } catch {
      result = null;
    }

    if (!response.ok || !result || result.sent !== true) {
      throw new Error(
        result && typeof result.error === 'string'
          ? result.error
          : 'La demande n’a pas pu être envoyée. Vos informations restent dans le formulaire.',
      );
    }

    form.reset();
    updateSelectedContactFiles();
    if (statusMessage) {
      statusMessage.classList.remove('form-message-error');
      statusMessage.textContent = result.message;
    }
  } catch (error) {
    if (statusMessage) {
      statusMessage.classList.add('form-message-error');
      statusMessage.textContent =
        error instanceof Error
          ? error.message
          : 'Une erreur inattendue a empêché l’envoi. Vos informations restent dans le formulaire.';
    }
  } finally {
    submitButton.disabled = false;
  }
}

if (contactForm) {
  const query = new URLSearchParams(window.location.search);
  const service = query.get('service');
  const subject = query.get('subject');
  const message = query.get('message');
  const budget = query.get('budget');
  const serviceField = contactForm.querySelector('[name="service"]');
  const subjectField = contactForm.querySelector('[name="subject"]');
  const messageField = contactForm.querySelector('[name="message"]');
  const budgetField = contactForm.querySelector('[name="budget"]');
  const fileInput = contactForm.querySelector('[name="files"]');

  if (service && serviceField instanceof HTMLSelectElement) {
    const matchingOption = Array.from(serviceField.options).find(
      (option) => option.value === service,
    );
    if (matchingOption) serviceField.value = matchingOption.value;
  }

  if (subject && subjectField instanceof HTMLInputElement) subjectField.value = translate(subject);
  if (message && messageField instanceof HTMLTextAreaElement) messageField.value = translate(message);
  if (budget && budgetField instanceof HTMLInputElement) budgetField.value = budget;
  if (fileInput instanceof HTMLInputElement) {
    fileInput.addEventListener('change', updateSelectedContactFiles);
  }

  const profileField = contactForm.querySelector('#contactProfile');
  const companyLabel = contactForm.querySelector('#companyLabel');
  const companyInput = contactForm.querySelector('#companyInput');
  const updateProfileFields = () => {
    if (!(profileField instanceof HTMLSelectElement) || !companyLabel || !(companyInput instanceof HTMLInputElement)) return;
    const isCompany = profileField.value !== 'Particulier';
    companyLabel.textContent = translate(isCompany ? 'Organisation / Nom (Optionnel)' : 'Profession / Activité (Optionnel)');
    const placeholder = isCompany ? 'Ex : Nom de votre entreprise, association...' : 'Ex : Étudiant, salarié, indépendant...';
    if (window.NoviaI18n) window.NoviaI18n.setTranslatedAttribute(companyInput, 'placeholder', placeholder);
    else companyInput.placeholder = placeholder;
  };
  if (profileField instanceof HTMLSelectElement) {
    profileField.addEventListener('change', updateProfileFields);
    window.addEventListener('novia:languagechange', updateProfileFields);
    updateProfileFields();
  }
}

forms.forEach((form) => {
  form.addEventListener('submit', async (event) => {
    event.preventDefault();

    const successMsg = form.querySelector('.form-success');
    const formType = form.dataset.form;

    if (formType === 'contact' && form instanceof HTMLFormElement) {
      const submitButton = form.querySelector('button[type="submit"]');
      if (submitButton instanceof HTMLButtonElement) {
        await submitContactRequest(form, submitButton, successMsg);
      }
      return;
    }

    if (formType === 'appointment') {
      submitAppointment(form, successMsg);
      return;
    }

    if (successMsg) {
      successMsg.textContent =
        formType === 'contact'
          ? 'Votre demande a bien été enregistrée. Notre équipe vous répondra rapidement.'
          : 'Votre rendez-vous a bien été enregistré. Vous recevrez une confirmation très prochainement.';
    }

    form.reset();

  });
});

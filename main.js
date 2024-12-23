function toggleMenu() {
  const sideMenu = document.querySelector('.side-menu');
  const toggleBtn = document.querySelector('.toggle-menu');
  const toggleBtnRect = toggleBtn.getBoundingClientRect();
  
  sideMenu.style.top = `75px`; // ضبط القائمة تحت الزر
  sideMenu.classList.toggle('active');
}

const text = "رحلتك تبدأ من هنا"; // النص الذي سيتم كتابته
const speed = 150; // سرعة الكتابة (بالمللي ثانية)
const delay = 2000; // وقت الانتظار بين كل كتابة وإعادة الكتابة

function typeWriter() {
  const titleElement = document.getElementById("animated-title");
  let i = 0;
  titleElement.textContent = ""; // تفريغ النص

  function type() {
    if (i < text.length) {
      titleElement.textContent += text.charAt(i);
      i++;
      setTimeout(type, speed);
    } else {
      setTimeout(() => {
        titleElement.textContent = ""; // تفريغ النص لإعادة الكتابة
        i = 0; // إعادة المؤشر إلى البداية
        type(); // إعادة تشغيل التأثير
      }, delay);
    }
  }

  type();
}
typeWriter();
const welcomeText = "مرحبًا بك في Blue Mark";
const welcomeSpeed = 150;

function typeWelcome() {
  const welcomeElement = document.getElementById("animated-welcome");
  let i = 0;
  welcomeElement.textContent = "";

  function type() {
    if (i < welcomeText.length) {
      welcomeElement.textContent += welcomeText.charAt(i);
      i++;
      setTimeout(type, welcomeSpeed);
    }
  }

  type();
}

typeWelcome();

// تحديد العناصر المطلوبة
const container = document.querySelector('.container-op');
const servicesContainer = document.querySelector('.services-container');
const leftArrow = document.getElementById('left-arrow');
const rightArrow = document.getElementById('right-arrow');

// التأكد من أن العناصر موجودة
if (container && servicesContainer && leftArrow && rightArrow) {
  // التعامل مع السهم الأيسر
  leftArrow.addEventListener('click', () => {
    container.scrollLeft += 300; // تحريك المحتوى لليسار
  });

  // التعامل مع السهم الأيمن
  rightArrow.addEventListener('click', () => {
    container.scrollLeft -= 300; // تحريك المحتوى لليمين
  });
}

document.addEventListener("DOMContentLoaded", () => {
  // تسهيل إضافة وظائف للأسهم في كل قسم
  function setupScroll(containerId, leftArrowId, rightArrowId) {
      const container = document.getElementById(containerId);
      const leftArrow = document.getElementById(leftArrowId);
      const rightArrow = document.getElementById(rightArrowId);

      const scrollAmount = 300; // مسافة التمرير

      rightArrow.addEventListener("click", () => {
          container.scrollLeft -= scrollAmount;
      });

      leftArrow.addEventListener("click", () => {
          container.scrollLeft += scrollAmount;
      });
  }

  // استدعاء الوظيفة لكل قسم
  setupScroll("marketing-container", "marketing-left", "marketing-right");
  setupScroll("other-container", "other-left", "other-right");
});



window.addEventListener('scroll', () => {
const fixedMen = document.querySelector('.fixed-men');

if (window.scrollY > 50) { 
  fixedMen.classList.add('scrolled');
} else {
  fixedMen.classList.remove('scrolled');
}
});


window.onload = function () {
    const swiper = new Swiper('.swiper-container', {
      loop: true,
      slidesPerView: 3,
      spaceBetween: 20,
      autoplay: {
        delay: 3000,
        disableOnInteraction: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      breakpoints: {
        768: {
          slidesPerView: 4,
        },
        480: {
          slidesPerView: 1,
        },
        300: {
          slidesPerView: 1,
        },
      },
    });
  };
  

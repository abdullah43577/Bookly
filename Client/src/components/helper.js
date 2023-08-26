import Swal from 'sweetalert2';

export const alert = function (status, message) {
  const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000,
    timerProgressBar: true,
    didOpen: (toast) => {
      toast.addEventListener('mouseenter', Swal.stopTimer);
      toast.addEventListener('mouseleave', Swal.resumeTimer);
    },
  });

  Toast.fire({
    icon: status,
    title: message,
  });
};

// export const SERVER = 'http://localhost:8080/api';
export const SERVER = 'https://bookly-api.onrender.com/api';

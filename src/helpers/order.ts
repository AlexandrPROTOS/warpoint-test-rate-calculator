import { ElLoading, ElNotification } from 'element-plus';

export const simulateOrder = (): void => {
  const loading = ElLoading.service({
    lock: true,
    text: 'Оформляем заказ',
    background: 'rgba(0, 0, 0, 0.7)'
  });
  setTimeout(() => {
    loading.close();
    ElNotification({
      title: 'Готово',
      message: 'Подписка успешно оформлена',
      type: 'success'
    });
  }, 1500);
};


import { ref } from 'vue';

export function useFormatDate() {
  const formatDate = (date) => {
    if (!date) return '';
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  };

  return {
    formatDate,
  };
}

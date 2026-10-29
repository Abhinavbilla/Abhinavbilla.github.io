import { useEffect, useState } from 'react';

const formatter = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit',
  minute: '2-digit',
  timeZone: 'Asia/Kolkata'
});

/**
 * Current time in Bangalore as "HH:MM", refreshed every 30 seconds.
 */
export default function useLocalTime() {
  const [time, setTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const id = setInterval(() => setTime(formatter.format(new Date())), 30000);
    return () => clearInterval(id);
  }, []);

  return time;
}

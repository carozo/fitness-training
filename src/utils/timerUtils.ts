/**
 * Formats seconds into a MM:SS display
 * @param seconds Total seconds to format
 * @returns Formatted time string (MM:SS)
 */
export const formatTime = (seconds: number): string => {
  const mins = Math.floor(seconds / 60);
  const secs = seconds % 60;
  return `${mins.toString().padStart(2, '0')}:${secs
    .toString()
    .padStart(2, '0')}`;
};

/**
 * Plays a beep sound
 * @param frequency Sound frequency
 * @param duration Sound duration in milliseconds
 */
export const playBeep = (frequency = 800, duration = 200): void => {
  try {
    const audioContext = new (window.AudioContext ||
      (window as typeof window & { webkitAudioContext: typeof AudioContext })
        .webkitAudioContext)();
    const oscillator = audioContext.createOscillator();
    const gainNode = audioContext.createGain();

    oscillator.connect(gainNode);
    gainNode.connect(audioContext.destination);

    oscillator.frequency.value = frequency;
    oscillator.type = 'sine';

    gainNode.gain.value = 0.5;

    oscillator.start();

    setTimeout(() => {
      oscillator.stop();
      audioContext.close();
    }, duration);
  } catch (error) {
    console.error('Error playing sound:', error);
  }
};

/**
 * Parses time strings like "1 min", "30s", "20s per side"
 * @param timeStr Time string to parse
 * @returns Time in seconds
 */
export const parseTime = (timeStr: string): number => {
  if (!timeStr) return 0;

  // Extract the first number from the string
  const match = timeStr.match(/(\d+)/);
  if (!match) return 0;

  const value = parseInt(match[1], 10);

  if (timeStr.includes('min')) {
    return value * 60;
  } else if (timeStr.includes('s')) {
    return value;
  }

  return value;
};

/**
 * Parses tabata format strings like "20s work / 10s rest", "20s/10s", or "4 min"
 * @param format Tabata format string
 * @returns Object with workTime and restTime in seconds
 */
export const parseTabataFormat = (
  format: string
): { workTime: number; restTime: number } => {
  // First check if it's a simple duration like "4 min"
  const totalDurationMatch = format.match(/^(\d+)\s*min$/i);
  if (totalDurationMatch) {
    // For total duration formats, use standard 20s work / 10s rest intervals
    return { workTime: 20, restTime: 10 };
  }

  // Handle formats like "20s work / 10s rest", "20s/10s", etc.
  const cleanFormat = format.replace(/work|rest|\s+/g, '');
  const parts = cleanFormat.split('/');

  let workTime = 20; // Default
  let restTime = 10; // Default

  if (parts.length >= 1) {
    const workMatch = parts[0].match(/(\d+)/);
    if (workMatch) {
      workTime = parseInt(workMatch[1], 10);
    }
  }

  if (parts.length >= 2) {
    const restMatch = parts[1].match(/(\d+)/);
    if (restMatch) {
      restTime = parseInt(restMatch[1], 10);
    }
  }

  return { workTime, restTime };
};

import { useCurrentPreview } from '../../state/currentPreview';
import { useStartDayOfWork } from '../../state/startDayOfWork';
import { Calendar, CalendarChangeEvent } from './Calendar';

export const Preview = () => {
  const preview = useCurrentPreview();
  const startOfWork = useStartDayOfWork((store) => store.day);

  const onChange = (event: CalendarChangeEvent) => {
    preview.setMonth(event.month);
    preview.setYear(event.year);
  };

  return (
    <Calendar
      onChange={onChange}
      month={preview.month}
      year={preview.year}
      startOfWork={startOfWork}
    />
  );
};

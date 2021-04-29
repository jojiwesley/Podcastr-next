export function convertDurationToTimeString(duration: number) {
const hours = Math.floor(duration / 3600) //(Math.floor aredonda o resultado para baixo )
const minutes = Math.floor((duration % 3600) / 60); // % = resto !!!
const seconds = Math.floor(duration % 60);

const timeString = [hours, minutes, seconds]
     .map(unit => String(unit).padStart(2, '0'))
     .join(':')


     return timeString;
}
import {event} from '@/services';
export function loadMainContent(view, ...args) {
    event.emit('load-main-content:view', view, ...args);
}
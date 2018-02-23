import {Notifications, Permissions} from 'expo';

import {AsyncStorage} from 'react-native';


const NOTIFICATION_KEY = 'flashcards:notifications';
const notificationTemplate = {
    title: 'Answer the quiz today!',
    body: 'Don\'t forget to answer the quiz today!',
    ios: {
        sound: true
    },
    android: {
        sound: true,
        priority: 'high',
        sticky: false,
        vibrate: true
    }
};

function createTomorrowDate() {
    const tomorrow = new Date();
    tomorrow.setDate(tomorrow.getDate() + 1);

    tomorrow.setHours(20);
    tomorrow.setMinutes(0);

    return tomorrow;
}

export function cancelAllScheduled() {
    return AsyncStorage
        .removeItem(NOTIFICATION_KEY)
        .then(Notifications.cancelAllScheduledNotificationsAsync);
}

export function scheduleForTomorrow() {
    AsyncStorage
        .getItem(NOTIFICATION_KEY)
        .then(JSON.parse)
        .then((data) => {
            data && Permissions
                .askAsync(Permissions.NOTIFICATIONS)
                .then(({status}) => {
                    if (status !== 'granted') {
                        return;
                    }

                    Notifications.cancelAllScheduledNotificationsAsync();

                    Notifications.scheduleLocalNotificationAsync(notificationTemplate, {
                            time: createTomorrowDate(),
                            repeat: 'day',
                        }
                    );

                    AsyncStorage.setItem(NOTIFICATION_KEY, JSON.stringify(true));
                })
        })
}
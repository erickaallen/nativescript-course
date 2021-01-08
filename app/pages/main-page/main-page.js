"use strict";
var observable_1 = require('data/observable');
var page;
var tempSessions = [
    {
        id: '0',
        title: 'session 1'
    },
    {
        id: '1',
        title: 'session 2'
    },
    {
        id: '2',
        title: 'session 3'
    },
];
function pageLoaded(args) {
    page = args.object;
    page.bindingContext = new observable_1.Observable({
        sessions: tempSessions
    });
}
exports.pageLoaded = pageLoaded;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibWFpbi1wYWdlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsibWFpbi1wYWdlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQSwyQkFBc0MsaUJBQWlCLENBQUMsQ0FBQTtBQUd4RCxJQUFJLElBQVUsQ0FBQztBQUVmLElBQUksWUFBWSxHQUFHO0lBQ2Y7UUFDSSxFQUFFLEVBQUUsR0FBRztRQUNQLEtBQUssRUFBRSxXQUFXO0tBQ3JCO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsR0FBRztRQUNQLEtBQUssRUFBRSxXQUFXO0tBQ3JCO0lBQ0Q7UUFDSSxFQUFFLEVBQUUsR0FBRztRQUNQLEtBQUssRUFBRSxXQUFXO0tBQ3JCO0NBQ0osQ0FBQztBQUVGLG9CQUEyQixJQUFlO0lBQ3RDLElBQUksR0FBUyxJQUFJLENBQUMsTUFBTSxDQUFDO0lBQ3pCLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSx1QkFBVSxDQUFDO1FBQ2pDLFFBQVEsRUFBRSxZQUFZO0tBQ3pCLENBQUMsQ0FBQztBQUNQLENBQUM7QUFMZSxrQkFBVSxhQUt6QixDQUFBIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgRXZlbnREYXRhLCBPYnNlcnZhYmxlIH0gZnJvbSAnZGF0YS9vYnNlcnZhYmxlJztcbmltcG9ydCB7IFBhZ2UgfSBmcm9tICd1aS9wYWdlJztcblxudmFyIHBhZ2U6IFBhZ2U7XG5cbnZhciB0ZW1wU2Vzc2lvbnMgPSBbXG4gICAge1xuICAgICAgICBpZDogJzAnLFxuICAgICAgICB0aXRsZTogJ3Nlc3Npb24gMSdcbiAgICB9LFxuICAgIHtcbiAgICAgICAgaWQ6ICcxJyxcbiAgICAgICAgdGl0bGU6ICdzZXNzaW9uIDInXG4gICAgfSxcbiAgICB7XG4gICAgICAgIGlkOiAnMicsXG4gICAgICAgIHRpdGxlOiAnc2Vzc2lvbiAzJ1xuICAgIH0sXG5dO1xuXG5leHBvcnQgZnVuY3Rpb24gcGFnZUxvYWRlZChhcmdzOiBFdmVudERhdGEpIHtcbiAgICBwYWdlID0gPFBhZ2U+YXJncy5vYmplY3Q7XG4gICAgcGFnZS5iaW5kaW5nQ29udGV4dCA9IG5ldyBPYnNlcnZhYmxlKHtcbiAgICAgICAgc2Vzc2lvbnM6IHRlbXBTZXNzaW9uc1xuICAgIH0pO1xufSJdfQ==
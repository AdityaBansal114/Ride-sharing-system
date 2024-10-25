import * as turf from '@turf/turf';

export  default function checkIfPointInGeofence(points, radius, targetPoint, flag) {
    if(flag == 0){
        for (let i = 0; i < points.length; i++) {
            const point = points[i];

            const geofence = turf.circle(point, radius, { units: 'kilometers' });
            // console.log("GEOFENCE", geofence)

            const isInside = turf.booleanPointInPolygon(targetPoint, geofence);
            // console.log(i);
            // console.log(isInside);
            // console.log(point);
            // console.log(targetPoint)


            if (isInside) {
                return { inside: true, coordinates: point , index:i};
            }
        }
        return { inside: false };
    }
    else{
        for (let i = points.length-1; i >= 0; i--) {
            const point = points[i];

            const geofence = turf.circle(point, radius, { units: 'kilometers' });
            // console.log("GEOFENCE", geofence)

            const isInside = turf.booleanPointInPolygon(targetPoint, geofence);
            // console.log(i);
            // console.log(isInside);
            // console.log(point);
            // console.log(targetPoint)


            if (isInside) {
                return { inside: true, coordinates: point , index:i};
            }
        }
        return { inside: false };
    }
    
}
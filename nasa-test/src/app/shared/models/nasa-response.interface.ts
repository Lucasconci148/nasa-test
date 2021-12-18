export interface INasaResponse {
    photos: Photo[];
}

export interface Photo {
    id:         number;
    sol:        number;
    camera:     Camera;
    img_src:    string;
    earth_date: Date;
    rover:      Rover;
}

export interface Camera {
    id:        number;
    name:      CameraName;
    rover_id:  number;
    full_name: FullName;
}

export enum FullName {
    MarsHandLensImager = "Mars Hand Lens Imager",
    MastCamera = "Mast Camera",
    NavigationCamera = "Navigation Camera",
}

export enum CameraName {
    Mahli = "MAHLI",
    Mast = "MAST",
    Navcam = "NAVCAM",
}

export interface Rover {
    id:           number;
    name:         RoverName;
    landing_date: Date;
    launch_date:  Date;
    status:       Status;
}

export enum RoverName {
    Curiosity = "Curiosity",
}

export enum Status {
    Active = "active",
}

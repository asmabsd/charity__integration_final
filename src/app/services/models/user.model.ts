
export interface User{

email?: string;
first_name: string;
id?: number;
password:String
password_reset_token:String
role:String
enabled: Number, // Valeur de l'utilisateur (actif ou non)
phonenumber: String, // Si tu veux inclure le numéro de téléphone

last_name: string;
lastSeen?: string;
online?: boolean;
}


// src/app/services/models/campaign.model.ts
export interface Campaign {
  id: string;
  title: string;
  description: string;
  targetAmount: number;
  currentAmount: number;
  imageUrl?: string;
  active: boolean;
  predictedDays?: number; // ✅ Add this optional property

}

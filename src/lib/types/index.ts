// Core types for Phase 2 components
export interface BaseEntity {
	id: string;
	createdAt: Date;
	updatedAt?: Date;
}

export type PaddleShape = 'round' | 'teardrop' | 'diamond';
export type PaddleBalance = 'head-heavy' | 'balanced' | 'handle-heavy';
export type Rating = 1 | 2 | 3 | 4 | 5;

export interface AffiliateLinks {
	padelusa?: string;
	amazon?: string;
}

export interface PaddleReview {
	id: string;
	title: string;
	slug: string;
	brand: string;
	model: string;
	shape: PaddleShape;
	weight: number;
	balance: PaddleBalance;
	material: string;
	evaFoamType: string;
	powerRating: Rating;
	controlRating: Rating;
	comfortRating: Rating;
	price: number;
	pros: string[];
	cons: string[];
	affiliateLinks: AffiliateLinks;
	images: string[];
	content: string;
	excerpt?: string;
	publishedAt: Date;
	updatedAt?: Date;
	category?: string;
	tags?: string[];
	featured?: boolean;
}
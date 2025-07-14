/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from "@graphql-typed-document-node/core";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T,
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
  Date: { input: any; output: any };
};

export type Address = {
  __typename?: "Address";
  city: Scalars["String"]["output"];
  complement: Scalars["String"]["output"];
  country: Scalars["String"]["output"];
  customAddress: Scalars["String"]["output"];
  location: GeoJson;
  neighborhood: Scalars["String"]["output"];
  state: Scalars["String"]["output"];
  street: Scalars["String"]["output"];
  zipCode: Scalars["String"]["output"];
};

export type AddressInput = {
  city?: InputMaybe<Scalars["String"]["input"]>;
  complement: Scalars["String"]["input"];
  country?: InputMaybe<Scalars["String"]["input"]>;
  customAddress?: InputMaybe<Scalars["String"]["input"]>;
  location?: InputMaybe<GeoJsonInput>;
  neighborhood?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  street?: InputMaybe<Scalars["String"]["input"]>;
  zipCode?: InputMaybe<Scalars["String"]["input"]>;
};

export type AdminResponse = {
  __typename?: "AdminResponse";
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type Blog = {
  __typename?: "Blog";
  _id: Scalars["ID"]["output"];
  author?: Maybe<Viewer>;
  content: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["String"]["output"]>;
  mainImage: Scalars["String"]["output"];
  ogImage?: Maybe<Scalars["String"]["output"]>;
  publicationScore?: Maybe<Scalars["Float"]["output"]>;
  savedCount?: Maybe<Scalars["Int"]["output"]>;
  score?: Maybe<Scalars["Float"]["output"]>;
  seo_desc?: Maybe<Scalars["String"]["output"]>;
  seo_title?: Maybe<Scalars["String"]["output"]>;
  slug: Scalars["String"]["output"];
  status: PostStatus;
  summary: Scalars["String"]["output"];
  tags?: Maybe<Array<Scalars["String"]["output"]>>;
  timesViewed?: Maybe<Scalars["Int"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type BlogFilter = {
  author?: InputMaybe<Scalars["ID"]["input"]>;
  dateFrom?: InputMaybe<Scalars["String"]["input"]>;
  dateTo?: InputMaybe<Scalars["String"]["input"]>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<PostStatusInput>;
  tags?: InputMaybe<Array<Scalars["String"]["input"]>>;
};

export type BlogInput = {
  author?: InputMaybe<Scalars["ID"]["input"]>;
  content?: InputMaybe<Scalars["String"]["input"]>;
  mainImage?: InputMaybe<Scalars["String"]["input"]>;
  seo_desc?: InputMaybe<Scalars["String"]["input"]>;
  seo_title?: InputMaybe<Scalars["String"]["input"]>;
  status?: InputMaybe<PostStatusInput>;
  summary?: InputMaybe<Scalars["String"]["input"]>;
  tags?: InputMaybe<Array<Scalars["String"]["input"]>>;
  title?: InputMaybe<Scalars["String"]["input"]>;
};

export type BlogPaginatedPublic = {
  __typename?: "BlogPaginatedPublic";
  docs?: Maybe<Array<BlogPublic>>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPrevPage: Scalars["Boolean"]["output"];
  limit: Scalars["Int"]["output"];
  nextPage?: Maybe<Scalars["Int"]["output"]>;
  page: Scalars["Int"]["output"];
  pagingCounter: Scalars["Int"]["output"];
  prevPage?: Maybe<Scalars["Int"]["output"]>;
  totalDocs: Scalars["Int"]["output"];
  totalPages: Scalars["Int"]["output"];
};

export type BlogPaginatedResponse = {
  __typename?: "BlogPaginatedResponse";
  data?: Maybe<BlogPaginatedPublic>;
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type BlogPublic = {
  __typename?: "BlogPublic";
  _id: Scalars["ID"]["output"];
  author?: Maybe<Viewer>;
  content: Scalars["String"]["output"];
  createdAt?: Maybe<Scalars["String"]["output"]>;
  mainImage: Scalars["String"]["output"];
  ogImage?: Maybe<Scalars["String"]["output"]>;
  publicationScore?: Maybe<Scalars["Float"]["output"]>;
  savedCount?: Maybe<Scalars["Int"]["output"]>;
  score?: Maybe<Scalars["Float"]["output"]>;
  seo_desc?: Maybe<Scalars["String"]["output"]>;
  seo_title?: Maybe<Scalars["String"]["output"]>;
  slug: Scalars["String"]["output"];
  status: PostStatus;
  summary: Scalars["String"]["output"];
  tags?: Maybe<Array<Scalars["String"]["output"]>>;
  timesViewed?: Maybe<Scalars["Int"]["output"]>;
  title: Scalars["String"]["output"];
  updatedAt?: Maybe<Scalars["String"]["output"]>;
};

export type BlogResponse = {
  __typename?: "BlogResponse";
  data?: Maybe<Blog>;
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type BlogStats = {
  __typename?: "BlogStats";
  draftPosts: Scalars["Int"]["output"];
  publishedPosts: Scalars["Int"]["output"];
  tags: Array<BlogTagCount>;
  totalPosts: Scalars["Int"]["output"];
  totalViews: Scalars["Int"]["output"];
};

export type BlogStatsResponse = {
  __typename?: "BlogStatsResponse";
  data?: Maybe<BlogStats>;
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type BlogTagCount = {
  __typename?: "BlogTagCount";
  count: Scalars["Int"]["output"];
  tag: Scalars["String"]["output"];
};

export type CityPropertyCount = {
  __typename?: "CityPropertyCount";
  city?: Maybe<Scalars["String"]["output"]>;
  count?: Maybe<Scalars["Int"]["output"]>;
};

export type Company = {
  __typename?: "Company";
  _id: Scalars["ID"]["output"];
  address: Address;
  admins?: Maybe<Array<Viewer>>;
  backgroundPic?: Maybe<Scalars["String"]["output"]>;
  businessId: Scalars["String"]["output"];
  businessVerified: Scalars["Boolean"]["output"];
  mainAddress: Scalars["String"]["output"];
  name: Scalars["String"]["output"];
  owner?: Maybe<Viewer>;
  phones?: Maybe<Array<Scalars["String"]["output"]>>;
  realtors?: Maybe<Array<Viewer>>;
};

export type CompanyInput = {
  address?: InputMaybe<AddressInput>;
  admins?: InputMaybe<Array<Scalars["ID"]["input"]>>;
  backgroundPic?: InputMaybe<Scalars["String"]["input"]>;
  businessId?: InputMaybe<Scalars["String"]["input"]>;
  businessVerified?: InputMaybe<Scalars["Boolean"]["input"]>;
  mainAddress?: InputMaybe<Scalars["String"]["input"]>;
  name?: InputMaybe<Scalars["String"]["input"]>;
  phones?: InputMaybe<Array<Scalars["String"]["input"]>>;
  realtors?: InputMaybe<Array<Scalars["ID"]["input"]>>;
};

export type CompanyResponse = {
  __typename?: "CompanyResponse";
  data?: Maybe<Company>;
  message?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export type FeatureInput = {
  geometry: GeometryInput;
  properties?: InputMaybe<PropertyInput>;
  type: Scalars["String"]["input"];
};

export type GeoJson = {
  __typename?: "GeoJSON";
  coordinates: Array<Scalars["Float"]["output"]>;
  type: Scalars["String"]["output"];
};

export type GeoJsonInput = {
  coordinates?: InputMaybe<Array<InputMaybe<Scalars["Float"]["input"]>>>;
  type?: InputMaybe<Scalars["String"]["input"]>;
};

export type GeometryInput = {
  coordinates: Array<InputMaybe<Array<Array<Scalars["Float"]["input"]>>>>;
  type: Scalars["String"]["input"];
};

export type GetMinMaxResponse = {
  __typename?: "GetMinMaxResponse";
  _id?: Maybe<Scalars["String"]["output"]>;
  maxAreaBuilt?: Maybe<Scalars["Float"]["output"]>;
  maxAreaLot?: Maybe<Scalars["Float"]["output"]>;
  maxAreaTerrace?: Maybe<Scalars["Float"]["output"]>;
  maxAreaTerrain?: Maybe<Scalars["Float"]["output"]>;
  maxAreaTotal?: Maybe<Scalars["Float"]["output"]>;
  maxBalconies?: Maybe<Scalars["Int"]["output"]>;
  maxBathrooms?: Maybe<Scalars["Int"]["output"]>;
  maxBedrooms?: Maybe<Scalars["Int"]["output"]>;
  maxCoveredParkingLots?: Maybe<Scalars["Int"]["output"]>;
  maxHalfBathrooms?: Maybe<Scalars["Int"]["output"]>;
  maxServiceRooms?: Maybe<Scalars["Int"]["output"]>;
  maxUncoveredParkingLots?: Maybe<Scalars["Int"]["output"]>;
  minAreaBuilt?: Maybe<Scalars["Float"]["output"]>;
  minAreaLot?: Maybe<Scalars["Float"]["output"]>;
  minAreaTerrace?: Maybe<Scalars["Float"]["output"]>;
  minAreaTerrain?: Maybe<Scalars["Float"]["output"]>;
  minAreaTotal?: Maybe<Scalars["Float"]["output"]>;
  minBalconies?: Maybe<Scalars["Int"]["output"]>;
  minBathrooms?: Maybe<Scalars["Int"]["output"]>;
  minBedrooms?: Maybe<Scalars["Int"]["output"]>;
  minCoveredParkingLots?: Maybe<Scalars["Int"]["output"]>;
  minHalfBathrooms?: Maybe<Scalars["Int"]["output"]>;
  minServiceRooms?: Maybe<Scalars["Int"]["output"]>;
  minUncoveredParkingLots?: Maybe<Scalars["Int"]["output"]>;
};

export type InputViewerCreate = {
  email: Scalars["String"]["input"];
  firstName: Scalars["String"]["input"];
  lastName: Scalars["String"]["input"];
  uid?: InputMaybe<Scalars["String"]["input"]>;
};

export type InputViewerUpdate = {
  backgroundPic?: InputMaybe<Scalars["String"]["input"]>;
  displayName?: InputMaybe<Scalars["String"]["input"]>;
  email?: InputMaybe<Scalars["String"]["input"]>;
  fcm?: InputMaybe<Scalars["String"]["input"]>;
  firstName?: InputMaybe<Scalars["String"]["input"]>;
  lastName?: InputMaybe<Scalars["String"]["input"]>;
  mailingEnabled?: InputMaybe<Scalars["Boolean"]["input"]>;
  mailingId?: InputMaybe<Scalars["String"]["input"]>;
  notificationTopics?: InputMaybe<
    Array<InputMaybe<Scalars["String"]["input"]>>
  >;
  profilePic?: InputMaybe<Scalars["String"]["input"]>;
  tyc?: InputMaybe<Scalars["Date"]["input"]>;
};

export type Message = {
  __typename?: "Message";
  message: Scalars["String"]["output"];
  success: Scalars["Boolean"]["output"];
};

export type MinMaxFloatInput = {
  max?: InputMaybe<Scalars["Float"]["input"]>;
  min?: InputMaybe<Scalars["Float"]["input"]>;
};

export type MinMaxIntInput = {
  max?: InputMaybe<Scalars["Int"]["input"]>;
  min?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Mutation = {
  __typename?: "Mutation";
  archiveBlog: BlogResponse;
  blogSeed: BlogResponse;
  createBlog: BlogResponse;
  createCompany: ResponseDataCompany;
  createProperty: ResponseDataProperty;
  createViewer: ResponseDataViewer;
  deleteBlog: BlogResponse;
  deleteViewer: Message;
  migrateProperties?: Maybe<Scalars["String"]["output"]>;
  migrateRentProperties?: Maybe<Scalars["String"]["output"]>;
  publishBlog: BlogResponse;
  removeAdminRole: AdminResponse;
  setUserAsAdmin: AdminResponse;
  syncUserClaims: AdminResponse;
  updateBlog: BlogResponse;
  updateCompany: ResponseDataCompany;
  updateProperty: ResponseDataProperty;
  updateViewer: ResponseDataViewer;
};

export type MutationArchiveBlogArgs = {
  blogId: Scalars["ID"]["input"];
};

export type MutationBlogSeedArgs = {
  authorId: Scalars["ID"]["input"];
};

export type MutationCreateBlogArgs = {
  blogData: BlogInput;
};

export type MutationCreateCompanyArgs = {
  address: AddressInput;
  businessId: Scalars["String"]["input"];
  mainAddress: Scalars["String"]["input"];
  name: Scalars["String"]["input"];
  owner: Scalars["ID"]["input"];
  phones: Array<Scalars["String"]["input"]>;
};

export type MutationCreatePropertyArgs = {
  propertyData: PropertyInput;
};

export type MutationCreateViewerArgs = {
  userData: InputViewerCreate;
};

export type MutationDeleteBlogArgs = {
  blogId: Scalars["ID"]["input"];
};

export type MutationPublishBlogArgs = {
  blogId: Scalars["ID"]["input"];
};

export type MutationRemoveAdminRoleArgs = {
  userId: Scalars["ID"]["input"];
};

export type MutationSetUserAsAdminArgs = {
  companyId?: InputMaybe<Scalars["ID"]["input"]>;
  userId: Scalars["ID"]["input"];
};

export type MutationSyncUserClaimsArgs = {
  userId: Scalars["ID"]["input"];
};

export type MutationUpdateBlogArgs = {
  blogData: BlogInput;
  blogId: Scalars["ID"]["input"];
};

export type MutationUpdateCompanyArgs = {
  companyData: CompanyInput;
  companyId: Scalars["ID"]["input"];
};

export type MutationUpdatePropertyArgs = {
  propertyData: PropertyInput;
  propertyId: Scalars["ID"]["input"];
};

export type MutationUpdateViewerArgs = {
  userData: InputViewerUpdate;
};

export enum OfferType {
  Rent = "RENT",
  Sale = "SALE",
  SaleAndRent = "SALE_AND_RENT",
}

export enum OfferTypeInput {
  Rent = "RENT",
  Sale = "SALE",
  SaleAndRent = "SALE_AND_RENT",
}

export type PointInput = {
  coordinates: Array<Scalars["Float"]["input"]>;
  type: Scalars["String"]["input"];
};

export type PolygonInput = {
  features: Array<FeatureInput>;
  type: Scalars["String"]["input"];
};

export enum PostStatus {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export enum PostStatusInput {
  Archived = "archived",
  Draft = "draft",
  Published = "published",
}

export type PrivateCharacteristics = {
  __typename?: "PrivateCharacteristics";
  accessAccessibility?: Maybe<Scalars["Boolean"]["output"]>;
  airConditioning?: Maybe<Scalars["Boolean"]["output"]>;
  areaBuilt?: Maybe<Scalars["Float"]["output"]>;
  areaLot?: Maybe<Scalars["Float"]["output"]>;
  areaTerrace?: Maybe<Scalars["Float"]["output"]>;
  areaTerrain?: Maybe<Scalars["Float"]["output"]>;
  areaTotal?: Maybe<Scalars["Float"]["output"]>;
  balconies?: Maybe<Scalars["Int"]["output"]>;
  bathrooms?: Maybe<Scalars["Int"]["output"]>;
  bedrooms?: Maybe<Scalars["Int"]["output"]>;
  coveredParkingLots?: Maybe<Scalars["Int"]["output"]>;
  halfBathrooms?: Maybe<Scalars["Int"]["output"]>;
  serviceRooms?: Maybe<Scalars["Int"]["output"]>;
  uncoveredParkingLots?: Maybe<Scalars["Int"]["output"]>;
};

export type PrivateCharacteristicsFilter = {
  accessAccessibility?: InputMaybe<Scalars["Boolean"]["input"]>;
  airConditioning?: InputMaybe<Scalars["Boolean"]["input"]>;
  areaBuilt?: InputMaybe<MinMaxFloatInput>;
  areaLot?: InputMaybe<MinMaxFloatInput>;
  areaTerrace?: InputMaybe<MinMaxFloatInput>;
  areaTerrain?: InputMaybe<MinMaxFloatInput>;
  areaTotal?: InputMaybe<MinMaxFloatInput>;
  balconies?: InputMaybe<MinMaxIntInput>;
  bathrooms?: InputMaybe<MinMaxIntInput>;
  bedrooms?: InputMaybe<MinMaxIntInput>;
  coveredParkingLots?: InputMaybe<MinMaxIntInput>;
  halfBathrooms?: InputMaybe<MinMaxIntInput>;
  serviceRooms?: InputMaybe<MinMaxIntInput>;
  uncoveredParkingLots?: InputMaybe<MinMaxIntInput>;
};

export type PrivateCharacteristicsInput = {
  accessAccessibility?: InputMaybe<Scalars["Boolean"]["input"]>;
  airConditioning?: InputMaybe<Scalars["Boolean"]["input"]>;
  areaBuilt?: InputMaybe<Scalars["Float"]["input"]>;
  areaLot?: InputMaybe<Scalars["Float"]["input"]>;
  areaTerrace?: InputMaybe<Scalars["Float"]["input"]>;
  areaTerrain?: InputMaybe<Scalars["Float"]["input"]>;
  areaTotal?: InputMaybe<Scalars["Float"]["input"]>;
  balconies?: InputMaybe<Scalars["Int"]["input"]>;
  bathrooms?: InputMaybe<Scalars["Int"]["input"]>;
  bedrooms?: InputMaybe<Scalars["Int"]["input"]>;
  coveredParkingLots?: InputMaybe<Scalars["Int"]["input"]>;
  halfBathrooms?: InputMaybe<Scalars["Int"]["input"]>;
  serviceRooms?: InputMaybe<Scalars["Int"]["input"]>;
  uncoveredParkingLots?: InputMaybe<Scalars["Int"]["input"]>;
};

export type Property = {
  __typename?: "Property";
  _id: Scalars["ID"]["output"];
  address?: Maybe<Address>;
  antiquity?: Maybe<Scalars["Int"]["output"]>;
  code?: Maybe<Scalars["String"]["output"]>;
  company?: Maybe<Company>;
  description: Scalars["String"]["output"];
  images?: Maybe<Array<Scalars["String"]["output"]>>;
  mainImage: Scalars["String"]["output"];
  mainImageBlurhash: Scalars["String"]["output"];
  offerType: OfferType;
  ogImage?: Maybe<Scalars["String"]["output"]>;
  owner?: Maybe<Viewer>;
  privateCharacteristics?: Maybe<PrivateCharacteristics>;
  propertyType?: Maybe<PropertyType>;
  publicCharacteristics?: Maybe<PublicCharacteristics>;
  publicationScore?: Maybe<Scalars["Float"]["output"]>;
  rentPrice?: Maybe<Scalars["Float"]["output"]>;
  salePrice?: Maybe<Scalars["Float"]["output"]>;
  savedCount?: Maybe<Scalars["Int"]["output"]>;
  score?: Maybe<Scalars["Float"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  stratum?: Maybe<Scalars["Int"]["output"]>;
  timesViewed?: Maybe<Scalars["Int"]["output"]>;
  title: Scalars["String"]["output"];
  urlPath?: Maybe<Scalars["String"]["output"]>;
};

export type PropertyFilter = {
  antiquity?: InputMaybe<MinMaxIntInput>;
  city?: InputMaybe<Scalars["String"]["input"]>;
  neighborhood?: InputMaybe<Scalars["String"]["input"]>;
  offerType?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  point?: InputMaybe<PointInput>;
  polygon?: InputMaybe<PolygonInput>;
  privateCharacteristics?: InputMaybe<PrivateCharacteristicsFilter>;
  propertyType?: InputMaybe<Array<InputMaybe<Scalars["String"]["input"]>>>;
  publicCharacteristics?: InputMaybe<PublicCharacteristicsFilter>;
  rentPrice?: InputMaybe<MinMaxIntInput>;
  salePrice?: InputMaybe<MinMaxIntInput>;
  search?: InputMaybe<Scalars["String"]["input"]>;
  state?: InputMaybe<Scalars["String"]["input"]>;
  stratum?: InputMaybe<Array<InputMaybe<Scalars["Int"]["input"]>>>;
};

export type PropertyInput = {
  address?: InputMaybe<AddressInput>;
  antiquity?: InputMaybe<Scalars["Int"]["input"]>;
  company?: InputMaybe<Scalars["ID"]["input"]>;
  description?: InputMaybe<Scalars["String"]["input"]>;
  images?: InputMaybe<Array<Scalars["String"]["input"]>>;
  mainImage?: InputMaybe<Scalars["String"]["input"]>;
  offerType: OfferTypeInput;
  owner?: InputMaybe<Scalars["ID"]["input"]>;
  privateCharacteristics?: InputMaybe<PrivateCharacteristicsInput>;
  propertyType?: InputMaybe<PropertyTypeInput>;
  publicCharacteristics?: InputMaybe<PublicCharacteristicsInput>;
  rentPrice?: InputMaybe<Scalars["Int"]["input"]>;
  salePrice?: InputMaybe<Scalars["Int"]["input"]>;
  stratum?: InputMaybe<Scalars["Int"]["input"]>;
};

export type PropertyMapResult = {
  __typename?: "PropertyMapResult";
  docs: Array<Property>;
  totalDocs: Scalars["Int"]["output"];
};

export type PropertyPaginatedPublic = {
  __typename?: "PropertyPaginatedPublic";
  docs?: Maybe<Array<PropertyPublic>>;
  hasNextPage: Scalars["Boolean"]["output"];
  hasPrevPage: Scalars["Boolean"]["output"];
  limit: Scalars["Int"]["output"];
  nextPage?: Maybe<Scalars["Int"]["output"]>;
  page: Scalars["Int"]["output"];
  pagingCounter: Scalars["Int"]["output"];
  prevPage?: Maybe<Scalars["Int"]["output"]>;
  totalDocs: Scalars["Int"]["output"];
  totalPages: Scalars["Int"]["output"];
};

export type PropertyPublic = {
  __typename?: "PropertyPublic";
  _id: Scalars["ID"]["output"];
  address?: Maybe<Address>;
  antiquity?: Maybe<Scalars["Int"]["output"]>;
  code?: Maybe<Scalars["String"]["output"]>;
  company?: Maybe<Company>;
  description: Scalars["String"]["output"];
  images?: Maybe<Array<Scalars["String"]["output"]>>;
  mainImage: Scalars["String"]["output"];
  mainImageBlurhash: Scalars["String"]["output"];
  offerType: OfferType;
  ogImage?: Maybe<Scalars["String"]["output"]>;
  owner?: Maybe<Viewer>;
  privateCharacteristics?: Maybe<PrivateCharacteristics>;
  propertyType?: Maybe<PropertyType>;
  publicCharacteristics?: Maybe<PublicCharacteristics>;
  publicationScore?: Maybe<Scalars["Float"]["output"]>;
  rentPrice?: Maybe<Scalars["Float"]["output"]>;
  salePrice?: Maybe<Scalars["Float"]["output"]>;
  savedCount?: Maybe<Scalars["Int"]["output"]>;
  score?: Maybe<Scalars["Float"]["output"]>;
  slug?: Maybe<Scalars["String"]["output"]>;
  stratum?: Maybe<Scalars["Int"]["output"]>;
  timesViewed?: Maybe<Scalars["Int"]["output"]>;
  title: Scalars["String"]["output"];
  urlPath?: Maybe<Scalars["String"]["output"]>;
};

export type PropertyResponse = {
  __typename?: "PropertyResponse";
  data?: Maybe<Property>;
  message?: Maybe<Scalars["String"]["output"]>;
  success?: Maybe<Scalars["Boolean"]["output"]>;
};

export enum PropertyType {
  Apartment = "APARTMENT",
  ApartmentStudio = "APARTMENT_STUDIO",
  Building = "BUILDING",
  Cabin = "CABIN",
  CommercialSpace = "COMMERCIAL_SPACE",
  CountryHouse = "COUNTRY_HOUSE",
  Farm = "FARM",
  House = "HOUSE",
  HouseLot = "HOUSE_LOT",
  Lot = "LOT",
  MedicalOffice = "MEDICAL_OFFICE",
  Office = "OFFICE",
  Parking = "PARKING",
  Room = "ROOM",
  Storage = "STORAGE",
  Suite = "SUITE",
  Warehouse = "WAREHOUSE",
}

export enum PropertyTypeInput {
  Apartment = "APARTMENT",
  ApartmentStudio = "APARTMENT_STUDIO",
  Building = "BUILDING",
  Cabin = "CABIN",
  CommercialSpace = "COMMERCIAL_SPACE",
  CountryHouse = "COUNTRY_HOUSE",
  Farm = "FARM",
  House = "HOUSE",
  HouseLot = "HOUSE_LOT",
  Lot = "LOT",
  MedicalOffice = "MEDICAL_OFFICE",
  Office = "OFFICE",
  Parking = "PARKING",
  Room = "ROOM",
  Storage = "STORAGE",
  Suite = "SUITE",
  Warehouse = "WAREHOUSE",
}

export type PublicCharacteristics = {
  __typename?: "PublicCharacteristics";
  basketballCourt?: Maybe<Scalars["Boolean"]["output"]>;
  ccTv?: Maybe<Scalars["Boolean"]["output"]>;
  elevator?: Maybe<Scalars["Boolean"]["output"]>;
  garden?: Maybe<Scalars["Boolean"]["output"]>;
  golfCourse?: Maybe<Scalars["Boolean"]["output"]>;
  greenAreas?: Maybe<Scalars["Boolean"]["output"]>;
  grill?: Maybe<Scalars["Boolean"]["output"]>;
  gym?: Maybe<Scalars["Boolean"]["output"]>;
  jacuzzi?: Maybe<Scalars["Boolean"]["output"]>;
  lake?: Maybe<Scalars["Boolean"]["output"]>;
  oceanfront?: Maybe<Scalars["Boolean"]["output"]>;
  parking?: Maybe<Scalars["Boolean"]["output"]>;
  partyRoom?: Maybe<Scalars["Boolean"]["output"]>;
  playground?: Maybe<Scalars["Boolean"]["output"]>;
  river?: Maybe<Scalars["Boolean"]["output"]>;
  sauna?: Maybe<Scalars["Boolean"]["output"]>;
  security?: Maybe<Scalars["Boolean"]["output"]>;
  soccerField?: Maybe<Scalars["Boolean"]["output"]>;
  sportsCourt?: Maybe<Scalars["Boolean"]["output"]>;
  squashCourt?: Maybe<Scalars["Boolean"]["output"]>;
  steamRoom?: Maybe<Scalars["Boolean"]["output"]>;
  swimmingPool?: Maybe<Scalars["Boolean"]["output"]>;
  tenisCourt?: Maybe<Scalars["Boolean"]["output"]>;
  terrace?: Maybe<Scalars["Boolean"]["output"]>;
  volleyballCourt?: Maybe<Scalars["Boolean"]["output"]>;
};

export type PublicCharacteristicsFilter = {
  basketballCourt?: InputMaybe<Scalars["Boolean"]["input"]>;
  ccTv?: InputMaybe<Scalars["Boolean"]["input"]>;
  elevator?: InputMaybe<Scalars["Boolean"]["input"]>;
  garden?: InputMaybe<Scalars["Boolean"]["input"]>;
  golfCourse?: InputMaybe<Scalars["Boolean"]["input"]>;
  greenAreas?: InputMaybe<Scalars["Boolean"]["input"]>;
  grill?: InputMaybe<Scalars["Boolean"]["input"]>;
  gym?: InputMaybe<Scalars["Boolean"]["input"]>;
  jacuzzi?: InputMaybe<Scalars["Boolean"]["input"]>;
  lake?: InputMaybe<Scalars["Boolean"]["input"]>;
  oceanfront?: InputMaybe<Scalars["Boolean"]["input"]>;
  parking?: InputMaybe<Scalars["Boolean"]["input"]>;
  partyRoom?: InputMaybe<Scalars["Boolean"]["input"]>;
  playground?: InputMaybe<Scalars["Boolean"]["input"]>;
  river?: InputMaybe<Scalars["Boolean"]["input"]>;
  sauna?: InputMaybe<Scalars["Boolean"]["input"]>;
  security?: InputMaybe<Scalars["Boolean"]["input"]>;
  soccerField?: InputMaybe<Scalars["Boolean"]["input"]>;
  sportsCourt?: InputMaybe<Scalars["Boolean"]["input"]>;
  squashCourt?: InputMaybe<Scalars["Boolean"]["input"]>;
  steamRoom?: InputMaybe<Scalars["Boolean"]["input"]>;
  swimmingPool?: InputMaybe<Scalars["Boolean"]["input"]>;
  tenisCourt?: InputMaybe<Scalars["Boolean"]["input"]>;
  terrace?: InputMaybe<Scalars["Boolean"]["input"]>;
  volleyballCourt?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type PublicCharacteristicsInput = {
  basketballCourt?: InputMaybe<Scalars["Boolean"]["input"]>;
  ccTv?: InputMaybe<Scalars["Boolean"]["input"]>;
  elevator?: InputMaybe<Scalars["Boolean"]["input"]>;
  garden?: InputMaybe<Scalars["Boolean"]["input"]>;
  golfCourse?: InputMaybe<Scalars["Boolean"]["input"]>;
  greenAreas?: InputMaybe<Scalars["Boolean"]["input"]>;
  grill?: InputMaybe<Scalars["Boolean"]["input"]>;
  gym?: InputMaybe<Scalars["Boolean"]["input"]>;
  jacuzzi?: InputMaybe<Scalars["Boolean"]["input"]>;
  lake?: InputMaybe<Scalars["Boolean"]["input"]>;
  oceanfront?: InputMaybe<Scalars["Boolean"]["input"]>;
  parking?: InputMaybe<Scalars["Boolean"]["input"]>;
  partyRoom?: InputMaybe<Scalars["Boolean"]["input"]>;
  playground?: InputMaybe<Scalars["Boolean"]["input"]>;
  river?: InputMaybe<Scalars["Boolean"]["input"]>;
  sauna?: InputMaybe<Scalars["Boolean"]["input"]>;
  security?: InputMaybe<Scalars["Boolean"]["input"]>;
  soccerField?: InputMaybe<Scalars["Boolean"]["input"]>;
  sportsCourt?: InputMaybe<Scalars["Boolean"]["input"]>;
  squashCourt?: InputMaybe<Scalars["Boolean"]["input"]>;
  steamRoom?: InputMaybe<Scalars["Boolean"]["input"]>;
  swimmingPool?: InputMaybe<Scalars["Boolean"]["input"]>;
  tenisCourt?: InputMaybe<Scalars["Boolean"]["input"]>;
  terrace?: InputMaybe<Scalars["Boolean"]["input"]>;
  volleyballCourt?: InputMaybe<Scalars["Boolean"]["input"]>;
};

export type Query = {
  __typename?: "Query";
  companies: Array<Company>;
  company?: Maybe<Company>;
  companyByUser?: Maybe<Company>;
  getBlog: BlogResponse;
  getBlogById: BlogResponse;
  getBlogStats: BlogStatsResponse;
  getBlogs: BlogPaginatedResponse;
  getMinMaxValues?: Maybe<GetMinMaxResponse>;
  getPropertiesCountByCity: Array<CityPropertyCount>;
  getPropertiesPublic: PropertyPaginatedPublic;
  getProperty?: Maybe<Property>;
  getViewer?: Maybe<Viewer>;
  propertiesByOwner: Array<Property>;
};

export type QueryCompanyArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryCompanyByUserArgs = {
  userId: Scalars["ID"]["input"];
};

export type QueryGetBlogArgs = {
  slug: Scalars["String"]["input"];
};

export type QueryGetBlogByIdArgs = {
  id: Scalars["ID"]["input"];
};

export type QueryGetBlogsArgs = {
  filter?: InputMaybe<BlogFilter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryGetPropertiesPublicArgs = {
  company: Scalars["ID"]["input"];
  filter?: InputMaybe<PropertyFilter>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  owner: Scalars["ID"]["input"];
  page?: InputMaybe<Scalars["Int"]["input"]>;
};

export type QueryGetPropertyArgs = {
  urlPath: Scalars["String"]["input"];
};

export type QueryPropertiesByOwnerArgs = {
  userId: Scalars["ID"]["input"];
};

export type ResponseDataCompany = {
  __typename?: "ResponseDataCompany";
  getCompany?: Maybe<CompanyResponse>;
};

export type ResponseDataProperty = {
  __typename?: "ResponseDataProperty";
  getProperty?: Maybe<PropertyResponse>;
};

export type ResponseDataViewer = {
  __typename?: "ResponseDataViewer";
  getViewer?: Maybe<Viewer>;
};

export type Viewer = {
  __typename?: "Viewer";
  _id: Scalars["ID"]["output"];
  backgroundPic?: Maybe<Scalars["String"]["output"]>;
  companyId?: Maybe<Scalars["String"]["output"]>;
  displayName?: Maybe<Scalars["String"]["output"]>;
  email?: Maybe<Scalars["String"]["output"]>;
  emailVerified?: Maybe<Scalars["Boolean"]["output"]>;
  fcm?: Maybe<Scalars["String"]["output"]>;
  firstName?: Maybe<Scalars["String"]["output"]>;
  /** @deprecated Use '_id' instead. */
  id: Scalars["ID"]["output"];
  lastName?: Maybe<Scalars["String"]["output"]>;
  mailingEnabled?: Maybe<Scalars["Boolean"]["output"]>;
  mailingId?: Maybe<Scalars["String"]["output"]>;
  name?: Maybe<Scalars["String"]["output"]>;
  notificationTopics?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  permissions?: Maybe<Array<Maybe<Scalars["String"]["output"]>>>;
  profilePic?: Maybe<Scalars["String"]["output"]>;
  role?: Maybe<Scalars["String"]["output"]>;
  tyc?: Maybe<Scalars["Date"]["output"]>;
  uid: Scalars["String"]["output"];
};

export type BlogPublicFragmentFragment = {
  __typename?: "BlogPublic";
  _id: string;
  title: string;
  summary: string;
  status: PostStatus;
  createdAt?: string | null;
  updatedAt?: string | null;
  timesViewed?: number | null;
  slug: string;
  mainImage: string;
  tags?: Array<string> | null;
  seo_title?: string | null;
  seo_desc?: string | null;
} & { " $fragmentName"?: "BlogPublicFragmentFragment" };

export type BlogFragmentFragment = {
  __typename?: "Blog";
  _id: string;
  title: string;
  summary: string;
  status: PostStatus;
  createdAt?: string | null;
  updatedAt?: string | null;
  timesViewed?: number | null;
  slug: string;
  mainImage: string;
  tags?: Array<string> | null;
  seo_title?: string | null;
  seo_desc?: string | null;
  content: string;
} & { " $fragmentName"?: "BlogFragmentFragment" };

export type GetBlogsQueryVariables = Exact<{
  page?: InputMaybe<Scalars["Int"]["input"]>;
  limit?: InputMaybe<Scalars["Int"]["input"]>;
  filter?: InputMaybe<BlogFilter>;
}>;

export type GetBlogsQuery = {
  __typename?: "Query";
  getBlogs: {
    __typename?: "BlogPaginatedResponse";
    success: boolean;
    message: string;
    data?: {
      __typename?: "BlogPaginatedPublic";
      totalDocs: number;
      limit: number;
      totalPages: number;
      page: number;
      pagingCounter: number;
      hasPrevPage: boolean;
      hasNextPage: boolean;
      prevPage?: number | null;
      nextPage?: number | null;
      docs?: Array<
        { __typename?: "BlogPublic" } & {
          " $fragmentRefs"?: {
            BlogPublicFragmentFragment: BlogPublicFragmentFragment;
          };
        }
      > | null;
    } | null;
  };
};

export type GetBlogQueryVariables = Exact<{
  slug: Scalars["String"]["input"];
}>;

export type GetBlogQuery = {
  __typename?: "Query";
  getBlog: {
    __typename?: "BlogResponse";
    success: boolean;
    message: string;
    data?:
      | ({ __typename?: "Blog" } & {
          " $fragmentRefs"?: { BlogFragmentFragment: BlogFragmentFragment };
        })
      | null;
  };
};

export type GetBlogByIdQueryVariables = Exact<{
  id: Scalars["ID"]["input"];
}>;

export type GetBlogByIdQuery = {
  __typename?: "Query";
  getBlogById: {
    __typename?: "BlogResponse";
    success: boolean;
    message: string;
    data?:
      | ({ __typename?: "Blog" } & {
          " $fragmentRefs"?: { BlogFragmentFragment: BlogFragmentFragment };
        })
      | null;
  };
};

export type DeleteBlogMutationVariables = Exact<{
  blogId: Scalars["ID"]["input"];
}>;

export type DeleteBlogMutation = {
  __typename?: "Mutation";
  deleteBlog: {
    __typename?: "BlogResponse";
    success: boolean;
    message: string;
    data?: { __typename?: "Blog"; _id: string } | null;
  };
};

export type UpdateBlogMutationVariables = Exact<{
  blogId: Scalars["ID"]["input"];
  blogData: BlogInput;
}>;

export type UpdateBlogMutation = {
  __typename?: "Mutation";
  updateBlog: {
    __typename?: "BlogResponse";
    success: boolean;
    message: string;
    data?: {
      __typename?: "Blog";
      _id: string;
      title: string;
      summary: string;
      content: string;
      status: PostStatus;
      slug: string;
      mainImage: string;
      tags?: Array<string> | null;
      seo_title?: string | null;
      seo_desc?: string | null;
      timesViewed?: number | null;
      savedCount?: number | null;
      publicationScore?: number | null;
      score?: number | null;
      ogImage?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      author?: {
        __typename?: "Viewer";
        _id: string;
        displayName?: string | null;
      } | null;
    } | null;
  };
};

export type CreateBlogMutationVariables = Exact<{
  blogData: BlogInput;
}>;

export type CreateBlogMutation = {
  __typename?: "Mutation";
  createBlog: {
    __typename?: "BlogResponse";
    success: boolean;
    message: string;
    data?: {
      __typename?: "Blog";
      _id: string;
      title: string;
      summary: string;
      content: string;
      status: PostStatus;
      slug: string;
      mainImage: string;
      tags?: Array<string> | null;
      seo_title?: string | null;
      seo_desc?: string | null;
      timesViewed?: number | null;
      savedCount?: number | null;
      publicationScore?: number | null;
      score?: number | null;
      ogImage?: string | null;
      createdAt?: string | null;
      updatedAt?: string | null;
      author?: {
        __typename?: "Viewer";
        _id: string;
        displayName?: string | null;
      } | null;
    } | null;
  };
};

export type GetBlogStatsQueryVariables = Exact<{ [key: string]: never }>;

export type GetBlogStatsQuery = {
  __typename?: "Query";
  getBlogStats: {
    __typename?: "BlogStatsResponse";
    success: boolean;
    message: string;
    data?: {
      __typename?: "BlogStats";
      draftPosts: number;
      totalPosts: number;
      publishedPosts: number;
      totalViews: number;
      tags: Array<{ __typename?: "BlogTagCount"; count: number; tag: string }>;
    } | null;
  };
};

export const BlogPublicFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogPublicFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BlogPublic" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "timesViewed" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "mainImage" } },
          { kind: "Field", name: { kind: "Name", value: "tags" } },
          { kind: "Field", name: { kind: "Name", value: "seo_title" } },
          { kind: "Field", name: { kind: "Name", value: "seo_desc" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlogPublicFragmentFragment, unknown>;
export const BlogFragmentFragmentDoc = {
  kind: "Document",
  definitions: [
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Blog" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "timesViewed" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "mainImage" } },
          { kind: "Field", name: { kind: "Name", value: "tags" } },
          { kind: "Field", name: { kind: "Name", value: "seo_title" } },
          { kind: "Field", name: { kind: "Name", value: "seo_desc" } },
          { kind: "Field", name: { kind: "Name", value: "content" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<BlogFragmentFragment, unknown>;
export const GetBlogsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetBlogs" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "page" } },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "limit" },
          },
          type: { kind: "NamedType", name: { kind: "Name", value: "Int" } },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "filter" },
          },
          type: {
            kind: "NamedType",
            name: { kind: "Name", value: "BlogFilter" },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getBlogs" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "page" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "page" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "limit" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "limit" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "filter" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "filter" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "docs" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "FragmentSpread",
                              name: {
                                kind: "Name",
                                value: "BlogPublicFragment",
                              },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalDocs" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "limit" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalPages" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "page" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "pagingCounter" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasPrevPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "hasNextPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "prevPage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "nextPage" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogPublicFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "BlogPublic" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "timesViewed" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "mainImage" } },
          { kind: "Field", name: { kind: "Name", value: "tags" } },
          { kind: "Field", name: { kind: "Name", value: "seo_title" } },
          { kind: "Field", name: { kind: "Name", value: "seo_desc" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBlogsQuery, GetBlogsQueryVariables>;
export const GetBlogDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetBlog" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "slug" } },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "String" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getBlog" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "slug" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "slug" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "BlogFragment" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Blog" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "timesViewed" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "mainImage" } },
          { kind: "Field", name: { kind: "Name", value: "tags" } },
          { kind: "Field", name: { kind: "Name", value: "seo_title" } },
          { kind: "Field", name: { kind: "Name", value: "seo_desc" } },
          { kind: "Field", name: { kind: "Name", value: "content" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBlogQuery, GetBlogQueryVariables>;
export const GetBlogByIdDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetBlogById" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: { kind: "Variable", name: { kind: "Name", value: "id" } },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getBlogById" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "id" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "id" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "FragmentSpread",
                        name: { kind: "Name", value: "BlogFragment" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
    {
      kind: "FragmentDefinition",
      name: { kind: "Name", value: "BlogFragment" },
      typeCondition: {
        kind: "NamedType",
        name: { kind: "Name", value: "Blog" },
      },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          { kind: "Field", name: { kind: "Name", value: "_id" } },
          { kind: "Field", name: { kind: "Name", value: "title" } },
          { kind: "Field", name: { kind: "Name", value: "summary" } },
          { kind: "Field", name: { kind: "Name", value: "status" } },
          { kind: "Field", name: { kind: "Name", value: "createdAt" } },
          { kind: "Field", name: { kind: "Name", value: "updatedAt" } },
          { kind: "Field", name: { kind: "Name", value: "timesViewed" } },
          { kind: "Field", name: { kind: "Name", value: "slug" } },
          { kind: "Field", name: { kind: "Name", value: "mainImage" } },
          { kind: "Field", name: { kind: "Name", value: "tags" } },
          { kind: "Field", name: { kind: "Name", value: "seo_title" } },
          { kind: "Field", name: { kind: "Name", value: "seo_desc" } },
          { kind: "Field", name: { kind: "Name", value: "content" } },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBlogByIdQuery, GetBlogByIdQueryVariables>;
export const DeleteBlogDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "DeleteBlog" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "blogId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "deleteBlog" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "blogId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "blogId" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                    ],
                  },
                },
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<DeleteBlogMutation, DeleteBlogMutationVariables>;
export const UpdateBlogDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "UpdateBlog" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "blogId" },
          },
          type: {
            kind: "NonNullType",
            type: { kind: "NamedType", name: { kind: "Name", value: "ID" } },
          },
        },
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "blogData" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BlogInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "updateBlog" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "blogId" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "blogId" },
                },
              },
              {
                kind: "Argument",
                name: { kind: "Name", value: "blogData" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "blogData" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "summary" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mainImage" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "tags" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seo_title" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seo_desc" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "author" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "displayName" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "timesViewed" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "savedCount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "publicationScore" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "score" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "ogImage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<UpdateBlogMutation, UpdateBlogMutationVariables>;
export const CreateBlogDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "mutation",
      name: { kind: "Name", value: "CreateBlog" },
      variableDefinitions: [
        {
          kind: "VariableDefinition",
          variable: {
            kind: "Variable",
            name: { kind: "Name", value: "blogData" },
          },
          type: {
            kind: "NonNullType",
            type: {
              kind: "NamedType",
              name: { kind: "Name", value: "BlogInput" },
            },
          },
        },
      ],
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "createBlog" },
            arguments: [
              {
                kind: "Argument",
                name: { kind: "Name", value: "blogData" },
                value: {
                  kind: "Variable",
                  name: { kind: "Name", value: "blogData" },
                },
              },
            ],
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      { kind: "Field", name: { kind: "Name", value: "_id" } },
                      { kind: "Field", name: { kind: "Name", value: "title" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "summary" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "content" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "status" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "slug" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "mainImage" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "tags" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seo_title" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "seo_desc" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "author" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "_id" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "displayName" },
                            },
                          ],
                        },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "timesViewed" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "savedCount" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "publicationScore" },
                      },
                      { kind: "Field", name: { kind: "Name", value: "score" } },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "ogImage" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "createdAt" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "updatedAt" },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<CreateBlogMutation, CreateBlogMutationVariables>;
export const GetBlogStatsDocument = {
  kind: "Document",
  definitions: [
    {
      kind: "OperationDefinition",
      operation: "query",
      name: { kind: "Name", value: "GetBlogStats" },
      selectionSet: {
        kind: "SelectionSet",
        selections: [
          {
            kind: "Field",
            name: { kind: "Name", value: "getBlogStats" },
            selectionSet: {
              kind: "SelectionSet",
              selections: [
                { kind: "Field", name: { kind: "Name", value: "success" } },
                { kind: "Field", name: { kind: "Name", value: "message" } },
                {
                  kind: "Field",
                  name: { kind: "Name", value: "data" },
                  selectionSet: {
                    kind: "SelectionSet",
                    selections: [
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "draftPosts" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalPosts" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "publishedPosts" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "totalViews" },
                      },
                      {
                        kind: "Field",
                        name: { kind: "Name", value: "tags" },
                        selectionSet: {
                          kind: "SelectionSet",
                          selections: [
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "count" },
                            },
                            {
                              kind: "Field",
                              name: { kind: "Name", value: "tag" },
                            },
                          ],
                        },
                      },
                    ],
                  },
                },
              ],
            },
          },
        ],
      },
    },
  ],
} as unknown as DocumentNode<GetBlogStatsQuery, GetBlogStatsQueryVariables>;

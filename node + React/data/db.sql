create table category
(
    id int not null identity(1,1),
    name varchar(100) not null,
    description varchar(1000) null,
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_category primary key clustered (id),
    index ix_category_name nonclustered (name)
)

create table user
(
    id int not null identity(1,1),
    username varchar(500) not null,
    passwordHash varbinary(100) not null,
    profileImage varbinary(max) null, 
    displayName varchar(100) null,
    firstName varchar(100) null,
    lastName varchar(100) null,
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_user primary key clustered (id),
    index ix_user_displayName nonclustered (displayName),
    index ix_user_username nonclustered (username)
)

/* many brands to many categories */
create table brand
(
    id int not null identity(1,1),
    name varchar(100) not null,
    description varchar(1000) null,
    categoryId int not null,
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_brand primary key clustered (id),
    constraint fk_brand_category foreign key (categoryId),
    index ix_brand_name nonclustered (name),
    index ix_brand_categoryId nonclustered (categoryId)
)

/* 1 brand to many models */
create table model
(
    id int not null identity(1,1),
    name varchar(100) not null,
    description varchar(1000) null,
    brandId int not null,
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_model primary key clustered (id),
    constraint fk_model_brand foreign key (brandId),
    index ix_model_name nonclustered (name),
    index ix_model_brandId nonclustered (brandId)
)

/* 1 model to many specs */
/* names: color, storage, memory etc.*/
create table spec
(
    id int not null identity(1,1),
    modelId int not null,
    name varhchar(100) not null,
    value varchar(100) not null,
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_spec primary key clustered (id),
    constraint fk_spec_model foreign key (modelId),
    index ix_spec_modelId nonclustered (modelId)

/* names: mint, good, fair, new */
create table condition
(
    id int not null identity(1,1),
    name varchar(10) not null,
    description varhc(1000) null,
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_condition primary key clustered (id),
    index ix_condition_name nonclustered (name)
)

/* names: original box, usb cable etc. */
create table accessory
(
    id int not null identity(1,1),
    name varchar(10) not null,
    description varhc(1000) null,
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_accessory primary key clustered (id),
    index ix_accessory_name nonclustered (name)
)

/* names: draft, active, sold, withdrawn, inactive etc. */
create table status
(
    id int not null identity(1,1),
    name varchar(10) not null,
    description varhc(1000) null, 
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_status primary key clustered (id),
    index ix_status_name nonclustered (name)
)

/* 1 user to many ads */
create table ad
(
    id int not null identity(1,1),
    userId int not null,
    modelId int not null,
    price smallmoney not null,
    conditionId int not null,    
    isoriginalowner boolean not null,
    isrefurbished boolean not null,
    statusId int not null,
    imei long null,
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_model primary key clustered (id),
    constraint fk_model_brand foreign key (brandId),
    index ix_model_name nonclustered (name),
    index ix_model_brandId nonclustered (brandId)
    constraint pk_ad primary key clustered (id),
    constraint fk_ad_user foreign key (userId),
    constraint fk_ad_model foreign key (modelId),
    index ix_ad_userId nonclustered (userId),
    index ix_ad_modelId nonclustered (modelId)
)

/* 1 ad to many attachments */
create table adattachment
(
    id int not null identity(1,1),
    adId int not null,
    attachment varbinary(max) not null,
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_adattachment primary key clustered (id),
    constraint fk_adattachment_ad primary key clustered (adId),
    index ix_adattachment_adId nonclustered (adId)
)

/* 1 ad to many comments */
create table adcomment
(
    id int not null identity(1,1),
    adId int not null,
    userId int not null,
    comment varchar(max) not null,
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_adcomment primary key clustered (id),
    constraint fk_adcomment_ad primary key clustered (adId),
    constraint fk_adcomment_user primary key clustered (userId),
    index ix_adcomment_adId nonclustered (adId)
)

/* 1 ad to many specs */
create table adspec
(
    id int not null identity(1,1),
    adId int not null,
    specId int not null,
    constraint pk_adspec primary key clustered (id),  
    constraint fk_adspec_ad primary key clustered (adId),
    constraint fk_adspec_spec primary key clustered (specId),
    index ix_adspec_adId nonclustered (adId)
)

/* 1 ad to many accessories */
create table adaccessory
(
    id int not null identity(1,1),
    adId int not null,
    accessoryId int not null,
    constraint pk_adaccessory primary key clustered (id), 
    constraint fk_adaccessory_ad primary key clustered (adId),
    constraint fk_adaccessory_accessory primary key clustered (accessoryId),
    index ix_adaccessory_adId nonclustered (adId)
)

/*  many users to many wishlists */
create table wishlist
(
    id int not null identity(1,1),
    userId int not null,
    adId int not null,
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_wishlist primary key clustered (id),
    constraint pk_wishlist_user primary key clustered (userId),
    constraint pk_wishlist_ad primary key clustered (adId),
    index ix_wishlist_userId nonclustered (userId)
)

/* 1 user to many subscriptions */
create table subscription
(
    id int not null identity(1,1),
    userId int not null,
    modelId int not null,
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_subscription primary key clustered (id),
    constraint fk_subscription_user foreign key (userId),
    constraint fk_subscription_model foreign key (modelId),
    index ix_subscription_modelId nonclustered (modelId)
 )

/* many user to many ratings */
create table rating
(
    id int not null identity(1,1),
    stars int not null,
    comment varchar(1000) null,
    buyerId int not null,
    sellerId int not null,
    modelId int not null
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_rating primary key clustered (id),
    constraint fk_rating_user foreign key (buyerId),
    constraint fk_rating_user foreign key (sellerId),
    constraint fk_rating_mdoel foreign key (modelId),
    index ix_rating_buyerId nonclustered (buyerId),
    index ix_rating_sellerId nonclustered (sellerId)
)

/* 1 user to 1 cart */
create table cart
(
    id int not null identity(1,1),
    userId int not null,
    dateCreated Date not null default getdate(),
    dateUpdated Date not null default getdate(),
    constraint pk_cart primary key clustered (id),
    constraint fk_cart_user foreign key (userId),
    index ix_cart_userId nonclustered (userId)
)

/* 1 cart to many cartitems */
create table cartitem
(
    id int not null identity(1,1),
    cartId int not null,
    modelId int not null,
    adId int not null,
    quantity int not null,
    price smallmoney not null,
    dateUpdated Date not null default getdate()
    dateUpdated Date not null default getdate(),
    constraint pk_cartitem primary key clustered (id),
    constraint fk_cartitem_cart foreign key (cartId),
    constraint fk_cartitem_model foreign key (modelId),
    constraint fk_cartitem_ad foreign key (cartId),
    index ix_cartitem_cartId nonclustered (cartId)ß
)








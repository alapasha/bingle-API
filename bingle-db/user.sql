create table User(
    nama_user varchar(100) not null,
    username varchar(20) not null,
    password_user varchar(20) not null
    unique(username)
);

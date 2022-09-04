create table order_status(
    id_order_status serial primary key,
    name varchar (40) not null
);

crate table orders(
    id_orders serial primary key,
    id_order_status integer not null,
    id_item integer not null,
    quantity integer not null,
    username varchar(20) not null,
    total_transaction integer not null,
    constraint order_foreign_key
    foreign key(id_order_status) references order_status(id_order_status)
);
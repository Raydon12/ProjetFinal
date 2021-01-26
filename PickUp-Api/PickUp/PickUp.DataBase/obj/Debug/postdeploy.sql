/*
Modèle de script de post-déploiement							
--------------------------------------------------------------------------------------
 Ce fichier contient des instructions SQL qui seront ajoutées au script de compilation.		
 Utilisez la syntaxe SQLCMD pour inclure un fichier dans le script de post-déploiement.			
 Exemple :      :r .\monfichier.sql								
 Utilisez la syntaxe SQLCMD pour référencer une variable dans le script de post-déploiement.		
 Exemple :      :setvar TableName MyTable							
               SELECT * FROM [$(TableName)]					
--------------------------------------------------------------------------------------
*/
insert into [User]
values('O tacos',NULL,NULL,'Ne laissez plus vos tacos sans sauce','Chaussee de diannt',4,'namet',4564,0458646,
'https://o-tacos.com/soundboard/static/media/logo.0e4ccc18.png',50.46825401694036, 4.861805540581263,3.5);
insert into [User]
values('Bonbon',NULL,NULL,'Un bon gastronomique sur bruxelles et ses alentours','place des panier',355,'FEDXCEX',4564,0458646,
'https://www.restaurant-bon-bon.be/images/2019/103-Bon-Bon-30-10-2018-1024x682.jpg',50.82328171058906, 4.446769922726022,5);
insert into [User]
values('Quick',NULL,NULL,'Découvrez notre Giant','Chaussée de bouge',7,'thon',4567,075648646,
'https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Quick-Logo.svg/1024px-Quick-Logo.svg.png',50.468484867223296, 4.863715158151904,4);
insert into [User]
values('Pizza Hut',NULL,NULL,'Mardi malin chez pizza hut','rue des lapins re',45,'name',1346,04586435,
'https://img2.freepng.fr/20180807/gq/kisspng-pizza-hut-logo-symbol-franchising-eat-ocean-plaza-5b69dcc190e953.6915758015336644495936.jpg',50.4659691267018, 4.871869066945511,2.5);
insert into [User]
values('Sushi Shop',NULL,NULL,'prenez une pause sushi','place des panier',355,'FEDXCEX',4564,0458646,
'https://static.takeaway.com/images/restaurants/be/NQ7OQRO/logo_465x320.png',50.46756851554458, 4.865350498137505,5);
insert into CategoryDetail
values ('Pizza')
insert into CategoryDetail
values ('Fast-Food')
insert into CategoryDetail
values ('Gastronomique')
insert into CategoryDetail
values ('Café')
insert into CategoryDetail
values ('Thailandais')
insert into CategoryDetail
values ('Sushi')
insert into CategoryDetail
values ('Africain')
insert into CategoryDetail
values ('indonésien')
insert into Category
values (1,4)
insert into Category
values (2,4)
insert into Category
values (3,4)
insert into Category
values (3,1)
insert into Category
values (4,6)

insert into EvenementDetail
values('Noel20', 'Un menu acheter un menu offert')
insert into EvenementDetail
values('BlackFriday', '25% sur les menus')
insert into EvenementDetail
values('Cupidon', '30% sur les menus a deux')
insert into EvenementDetail
values('N0', 'Un menu acheter un menu enfant offert')
insert into EvenementDetail
values('Pfr3', '5€ offert lors d une commande')

insert into Event
values(1,1)
insert into Event
values(1,3)
insert into Event
values(3,2)
insert into Event
values(2,4)
insert into Event
values(4,1)
insert into Event
values(3,1)
insert into Event
values(5,1)

GO

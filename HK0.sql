select *
from CITY
where COUNTRYCODE = 'USA'
and POPULATION > 100000

select NAME
from CITY
where COUNTRYCODE = 'USA'
and POPULATION > 120000

select *
from CITY
where ID = '1661'

select *
from CITY
where COUNTRYCODE = 'JPN'

select NAME
from CITY
where COUNTRYCODE = 'JPN'


select CITY,STATE
from STATION

/*Query a list of CITY names from STATION with even ID numbers only. You may print the results in any order, but must exclude duplicates from your answer.*/

select distinct CITY
from STATION
where (ID % 2) = 0
Feature: Testando API Pokemon

Background: Executa antes de cada parte
    * def url_base = 'https://pokeapi.co/api/v2'
Scenario: Testando retorno.
    Given url 'https://pokeapi.co/api/v2/pokemon/pikachu'
    When method get
    Then status 200

Scenario: Testando retorno com informações inválidas
    Given url 'https://pokeapi.co/api/v2/pokemon/chocolate'
    When method get
    Then status 404

Scenario: Testando retorno pikachu e verificando o JSON
    Given url url_base
    And path '/pokemon/pikachu'
    When method get
    Then status 200
    And match response.name == "pikachu"
    And match response.id == 25

Scenario: Testando retorno pokemon Rede entrando em um dos elementos do array de idiomas e testando retorno JSON
    Given url url_base
    And path '/version/1'
    When method get
    Then status 200
    And def idioma = $.names[5].language.url
    And print idioma
    And url idioma
    When method get
    Then status 200
    And match response.name == "es"
    And match response.id == 7

Scenario: Testando retorno squirtle e verificando o JSON
    Given url url_base
    And path '/pokemon/squirtle'
    When method get
    Then status 200
    And match response.name == "squirtle"
    And match response.order == 10

Scenario: Testando retorno pokemon Squirtle entrando em um dos elementos do array de movimentos e testando retorno JSON
    Given url url_base
    And path '/pokemon/squirtle'
    When method get
    Then status 200
    And def move = $.moves[6].move.url
    And print move
    And url move
    When method get
    Then status 200
    And match response.name == "take-down"

Scenario: Testando retorno pokemon Squirtle entrando em um dos elementos do array 'stats' e testando retorno JSON
    Given url url_base
    And path '/pokemon/squirtle'
    When method get
    Then status 200
    And def move = $.stats[1].stat.url
    And print move
    And url move
    When method get
    Then status 200
    And match response.name == "attack"
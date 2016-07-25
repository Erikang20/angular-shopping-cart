exports.seed = function ( knex, Promise ) {
    // Deletes ALL existing entries
    return knex( 'products' ).del()
        .then( function () {
            return Promise.all( [
        // Inserts seed entries
        knex( 'products' ).insert( {
                    id: 1,
                    colName: 'rowValue1'
                } ),
        knex( 'products' ).insert( {
                    id: 2,
                    colName: 'rowValue2'
                } ),
        knex( 'products' ).insert( {
                    id: 3,
                    colName: 'rowValue3'
                } )
      ] );
        } );
};

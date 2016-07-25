exports.up = function ( knex, Promise ) {
    return knex.schema.createTable( 'products', function ( table ) {
        table.increments( 'id' ).primary();
        table.string( 'name' );
        table.string( 'ingredients' );
        table.string( 'scale' );
        table.integer( 'price' );
        table.boolean( 'in_stock' );
        table.integer( 'rating' );
        table.string( 'img' ).defaultTo( '' );
        table.text( 'categories' );
    } )

};

exports.down = function ( knex, Promise ) {
    return knex.schema.dropTable( 'products' )

};

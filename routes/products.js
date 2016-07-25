var express = require( 'express' );
var router = express.Router();
var knex = require( '../db/knex' );
var methodOverride = require( 'method-override' );
var bodyParser = require( 'body-parser' );


router.get( '/', function ( req, res, next ) {
    //  knex( 'shopping' ).select().then( function ( result, err ) {
    res.render( 'index' )
    console.log( "index" );
    //  } )
} );


module.exports = router;

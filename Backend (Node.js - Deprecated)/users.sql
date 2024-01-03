\echo 'Delete and recreate  db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE oci;
CREATE DATABASE oci;
\connect oci

\i oci-schema.sql
\i oci-seed.sql

\echo 'Delete and recreate oci_test db?'
\prompt 'Return for yes or control-C to cancel > ' foo

DROP DATABASE oci_test;
CREATE DATABASE oci_test;
\connect oci_test

\i oci-schema.sql
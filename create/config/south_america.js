[
  {
    "name": "read_data",
    "file_name": "./source/natural_earth_vector/110m_cultural/ne_110m_admin_0_countries_lakes.shp",
    "filter": "CONTINENT = 'South America'"
  },
  {
    "name": "write_data",
    "format": "jqvmap",
    "file_name": "./output/jquery.vmap.south_america.js",
    "params": {
      "code_field": "SOV_A3",
      "name_field": "ADMIN",
      "name": "south_america"
    }
  }
]

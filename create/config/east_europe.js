[
  {
    "name": "read_data",
    "file_name": "./source/natural_earth_vector/110m_cultural/ne_110m_admin_0_countries_lakes.shp",
    "filter": "CONTINENT = 'Asia' OR ADMIN = 'Russia'",
    "longitude0": 25
  },
  {
    "name": "write_data",
    "format": "jqvmap",
    "file_name": "./output/jquery.vmap.east_europe.js",
    "params": {
      "code_field": "SOV_A3",
      "name_field": "ADMIN",
      "name": "east_europe"
    }
  }
]

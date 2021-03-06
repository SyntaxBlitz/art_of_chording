module.exports =
  { title: 'Art of Chording'
  , description: 'Learn stenography with Plover to get thought to text faster and more ergonomically than typing.'
  , ga: 'UA-102613911-3'
  , themeConfig:
    { lastUpdated: 'Last Updated'
    , repo: 'morinted/art_of_chording'
    , docsDir: 'docs'
    , editLinks: true
    , editLinkText: 'Suggest a change'
    , sidebar:
      [ '/'
      , { title: 'Introduction'
        , collapsable: false
        , children:
          [ '/introduction/'
          ]
        }
      , { title: 'The Layout'
        , children:
          [ '/layout/'
          , '/layout/chorded-keyboard'
          , '/layout/top-row'
          , '/layout/bottom-row'
          , '/layout/d-and-z'
          , '/layout/basic-number-bar'
          ]
        }
      , { title: 'Hidden Sounds'
        , children:
          [ '/sounds/'
          , '/sounds/dbl'
          , '/sounds/ch_th'
          , '/sounds/i'
          , '/sounds/m'
          , '/sounds/f_q'
          , '/sounds/ay_oy'
          , '/sounds/n'
          , '/sounds/oh'
          , '/sounds/v'
          , '/sounds/g_j'
          , '/sounds/x'
          , '/sounds/you_oo'
          , '/sounds/y_z'
          , '/sounds/ee'
          , '/sounds/sh'
          , '/sounds/eye'
          , '/sounds/fingerspelling'
          ]
        }
      , { title: 'Compound Sounds'
        , children:
          [ '/compounds/'
          , '/compounds/unstressed'
          , '/compounds/shun'
          , '/compounds/f_as_s'
          , '/compounds/mp'
          , '/compounds/nch_rch'
          , '/compounds/inversion'
          , '/compounds/con_com'
          , '/compounds/w_as_v'
          , '/compounds/rve'
          , '/compounds/ment'
          , '/compounds/lge_nge_lk_nk'
          , '/compounds/ent_int'
          ]
        }
      , '/draft-work/brainstorming'
      ] 
    }
  , palette:
    { $accentColor: '#c9070d'
    }
  }

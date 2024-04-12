import React, { Fragment } from 'react'
import TitleTypography from './title'
import g1 from '../../assests/image/svg/g1.svg'
import g2 from '../../assests/image/svg/g2.svg'
import g3 from '../../assests/image/svg/g3.svg'
import g4 from '../../assests/image/svg/g4.svg'
import g5 from '../../assests/image/svg/g5.svg'
import g6 from '../../assests/image/svg/g8.svg'
import g7 from '../../assests/image/svg/g10.svg'
import g8 from '../../assests/image/svg/g11.svg'
import { Grid,ImageListItem  } from '@mui/material'

export default function SchoolGallery() {
  return (
    <Fragment>
      <TitleTypography>گالری تصاویر           </TitleTypography>
      <Grid container spacing={1}  >
        <Grid item  xs={12} sm={6} md={3} lg={3} xl={3}>
        <ImageListItem >
          <img
            src={g1}
            srcSet={g1}
            loading="lazy"
          />
        </ImageListItem>
        </Grid>
        <Grid item  xs={12} sm={6} md={3} lg={3} xl={3}>
        <ImageListItem >
          <img
            src={g2}
            srcSet={g2}
            loading="lazy"
          />
        </ImageListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <ImageListItem >
          <img
            src={g3}
            srcSet={g3}
            loading="lazy"
          />
        </ImageListItem>
        </Grid>
        <Grid item xs={12} sm={6} md={3} lg={3} xl={3}>
        <ImageListItem >
          <img
            src={g4}
            srcSet={g4}
            loading="lazy"
          />
        </ImageListItem>
        </Grid>
        <Grid item  xs={12} sm={6} md={3} lg={3} xl={3}>
        <ImageListItem >
          <img
            src={g5}
            srcSet={g5}
            loading="lazy"
          />
        </ImageListItem>
        </Grid>
        <Grid item  xs={12} sm={6} md={3} lg={3} xl={3}>
        <ImageListItem >
          <img
            src={g6}
            srcSet={g6}
            loading="lazy"
          />
        </ImageListItem>
        </Grid>
        <Grid item  xs={12} sm={6} md={3} lg={3} xl={3}>
        <ImageListItem >
          <img
            src={g7}
            srcSet={g7}
            loading="lazy"
          />
        </ImageListItem>
        </Grid>
        <Grid item  xs={12} sm={6} md={3} lg={3} xl={3}>
        <ImageListItem >
          <img
            src={g8}
            srcSet={g8}
            loading="lazy"
          />
        </ImageListItem>
        </Grid>
      </Grid>
    </Fragment> 
  )
}

import { Fragment } from 'react';

import HeroModule from './hero-module'
import VideoModule from './video-module'
import SplitTextModule from './split-text-module'
import SliderModule from './slider-module'
import ListModule from './list-module'
import TextModule from './text-module'


export default function Modules({ modules }) {

  return (
    <>
    { modules?.map((module = []) => {
      return (
        <Fragment key={module._key}>
        { (module._type == 'heroModule') && <HeroModule {...module} /> }
        { (module._type == 'splitTextModule') && <SplitTextModule {...module} /> }
        { (module._type == 'videoModule') && <VideoModule {...module} />}
        { (module._type == 'sliderModule') && <SliderModule {...module} /> }
        { (module._type == 'listModule') && <ListModule {...module} /> }
        { (module._type == 'textModule') && <TextModule {...module} />}

        </Fragment>
        )}
      )}
    </>
  )
}

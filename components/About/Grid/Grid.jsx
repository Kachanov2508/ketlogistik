import HeadingSection from '../../HeadingSection/HeadingSection'
import classes from './Grid.module.scss'

const Grid = () => {
  return (
    <div className={classes.grid}>
        <HeadingSection>
            <h4>О компании</h4>
            <h2>Наши преимущества</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis vero nesciunt minus quidem veritatis dolore harum temporibus eaque excepturi nemo.</p>
        </HeadingSection>
        <div className={classes.steps}>
            <div className={classes.first_step}>
                <div>01</div>
                <h4>Heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio impedit ratione.</p>
            </div>
            <div>
                <div>02</div>
                <h4>Heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio impedit ratione.</p>
            </div>
            <div>
                <div>03</div>
                <h4>Heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio impedit ratione.</p>
            </div>
            <div>
                <div>04</div>
                <h4>Heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio impedit ratione.</p>
            </div>
            <div>
                <div>05</div>
                <h4>Heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio impedit ratione.</p>
            </div>
            <div>
                <div>06</div>
                <h4>Heading</h4>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Enim optio impedit ratione.</p>
            </div>
        </div>
    </div>
  )
}


export default Grid
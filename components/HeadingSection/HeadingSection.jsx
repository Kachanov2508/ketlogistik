import cls from './HeadingSection.module.scss'

const HeadingSection = ({ children }) => {
  return (
    <div className={cls.heading}>
        {children}
    </div>
  )
}

export default HeadingSection
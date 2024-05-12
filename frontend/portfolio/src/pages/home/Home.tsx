import { useEffect, useState } from 'react';
import { MainHome } from './style';
import { useSelector } from 'react-redux';
import { ChangeDescriptionRedux, ChangeThemeRedux } from '../../Types';
import PresentationSection from '../../components/sections/home/Presentation';
import { SkillSections } from '../../components/sections/home/section_skills/Skills';
import { SoftSkillSections } from '../../components/sections/home/section_softskill/SoftSkill';
import { SoftSkillDescriptionUtil } from '../../components/sections/home/section_softskill/Index';

const Home = () => {
  const themeSelector = useSelector((state:ChangeThemeRedux) => state.changeThemeReduce )
  const descriptionSelector = useSelector((state:ChangeDescriptionRedux) => state.changeDescriptionReduce )

  const [theme, setTheme] = useState('')
  const [description, setDescription] = useState('')

  useEffect(() => {
    setTheme(themeSelector)
  }, [themeSelector])

  useEffect(() => {
    setDescription(descriptionSelector)
  }, [descriptionSelector])

  return(
    <MainHome className={ theme }>
      <PresentationSection
        theme={ theme }
      />
      <SkillSections />
      <SoftSkillSections />
      <SoftSkillDescriptionUtil name={ description } />
    </MainHome>
  )
}

export default Home;
import { photo } from '../../utils/ImportIcons';
import { CardThumbProfile } from './style';

export const Card_Thumb_Profile = () => {
  return (
    <CardThumbProfile>
      <img src={ photo } alt="Este sou eu!" />
      <div>
        <h3>Jorge de Jesus Cardoso</h3>
        <h4>Desenvolvedor Web - Junior</h4>
        <p>FullStack - TypeScript, Python e C#</p>
      </div>
    </CardThumbProfile>
  );
}
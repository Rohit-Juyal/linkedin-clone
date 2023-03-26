import { FiberManualRecord, Info, Subtitles } from '@mui/icons-material'
import './widgets.css'

const Widgets = () => {
    const newsArticle = (heading, subtitle) => {
        return (
            <div className="widgets__article">
                <div className="widget__articleLeft">
                    <FiberManualRecord sx={{ fontSize: 15 }} />
                </div>
                <div className="widget__articleRight">
                    <h4>{heading}</h4>
                    <p>{subtitle}</p>
                </div>
            </div>
        )
    }
  return (
    <div className='widgets'>
        <div className="widgets__header">
            <h2>Linkedin News</h2>
            <Info /> 
        </div>
        {newsArticle("Whats new?", "Top news - 999 readers")}
        {newsArticle("Accenture to lay off 19,000", "Top news - 999 readers")}
        {newsArticle("Buyers feeling price pinch", "Top news - 1098 readers")}
        {newsArticle("The internet's multilingual future", "Top news - 8823 readers")}
        {newsArticle("Bollywood hits yanked from Spotify", "Top news - 1187 readers")}
        {newsArticle("Is gig work in for CXOs?", "Top news - 9119 readers")}
        {newsArticle("Top newsletters to follow", "Top news - 1999 readers")}
    </div>
  )
}

export default Widgets
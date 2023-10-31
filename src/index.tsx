import * as React from 'react'
import './styles.module.css'

type Props = {
  /** The config of the chatbot */
  config?: UiConfig
  /** The id of the chatbot */
  clientId: string
}

interface UiConfig {
  /** The width of the chatbot container with unit px
   * @default 500
   */
  containerWidth: number
  /** The height of the chatbot container with unit vh
   * @default 80
   */
  containerHeight: number
}

export const SamiChatBox = ({ config, clientId }: Props) => {
  const { containerWidth, containerHeight } = config || {
    containerWidth: 500,
    containerHeight: 80
  }
  const [isShow, setIsShow] = React.useState(false)

  return (
    <div id='sami_chatbot'>
      <div
        id='sami_chatbot_btn'
        onClick={() => {
          setIsShow(!isShow)
        }}
      >
        <img src='https://file-services-tt.s3.amazonaws.com/1698714060.9769785sami-logo.webp' />
      </div>
      <div
        id='sami_chatbot_iframe'
        style={{
          width: `${containerWidth}px`,
          height: `${containerHeight}vh`,
          display: isShow ? 'block' : 'none',
          opacity: isShow ? 1 : 0
        }}
      >
        <iframe
          width='100%'
          height='100%'
          src={`https://chat.sami-ai.vn/embed?id=${clientId}`}
          frameBorder='0'
        />
        <div
          id='sami_chatbot_close'
          onClick={() => {
            setIsShow(false)
          }}
        >
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
            style={{ width: '20px', height: '20px' }}
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='M6 18L18 6M6 6l12 12'
            />
          </svg>
        </div>
      </div>
    </div>
  )
}

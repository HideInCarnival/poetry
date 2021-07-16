import React from 'react'
import App from '../../components/App'

function About () {
    return (
        <App>
            <div id="about">
                <p>
                    如博尔赫斯在《诗之谜》中所提及，贝克莱主教曾经写过，苹果的味道其实不在苹果本身————苹果本身无法品尝自己的味道————
                    苹果的味道也不在吃的人嘴巴里头。苹果的味道需要两者之间的联系。究竟书的本质是什么呢？书本是实体世界当中的一个实体。书
                    是一套死板符号的组合。一直要等到正确的人来阅读，书中的文字————或者是文字背后的诗意，因为文字本身也只不过是符号而已————
                    这才会获得新生，而文字就在此刻获得了新生。
                </p>
                <p>
                    因此诗歌在文字之外，还需要出现正确的人来阅读它。我至今还能会想起自己第一次阅读诗歌的感觉，之后便常常容易沉溺与此种感觉之中，
                    但是记忆并不总是忠实的，很难说清这种感觉到底是初有的，还是曾经出现过。但是可以确定的是，每一次读诗都是一次新奇的体验。艺术
                    本身就带有一些神秘的元素，文字本身亦是符号，在无数符号所能组成的纷繁中，诗无疑最具代表性地继承了这种神秘。在每一次读诗的体验
                    中，我尝尝不得已沉浸在那些符号之中，那种若隐若现的神秘以及几个字中表现出的故事性令我欲罢不能。
                </p>
                <p>
                    也许是济慈最广为人知的十四行诗《初读查普曼译《荷马史诗》》。我们来看看这首诗的最后一句是如何波涛汹涌、如雷贯耳：
                </p>
                <div className="poem">
                    <p>之后我觉得我像是在监视星空</p>
                    <p>一颗年轻的行星走进了熠熠星空</p>
                    <p>或像是体格健壮的库特兹他那老鹰般的双眼</p>
                    <p>盯着太平洋一直瞧——而他所有的弟兄</p>
                    <p>心中都怀着荒诞的臆测彼此紧盯————</p>
                    <p>他不发一语，就在那大然山之巅</p>
                </div>
                <p>
                    希望每一首诗都能找到正确阅读它的人，献上叶芝《在本布尔山下》的最后一章：
                </p>
                <div className="poem">
                    <p>Under bare Ben Bulben's head</p>
                    <p>In Drumcliff churchyard Yeats is laid.</p>
                    <p>An ancestor was rector there</p>
                    <p>Long years ago, a church stands near,</p>
                    <p>By the road an ancient cross.</p>
                    <p>No marble, no conventional phrase;</p>
                    <p>On limestone quarried near the spot</p>
                    <p>By his command these words are cut:</p>
                    <p>Cast a cold eye</p>
                    <p>On life, on death.</p>
                    <p>Horseman, pass by!</p>
                </div>
            </div>
            <style jsx>
            {`
                #about {
                    padding: 50px 100px;
                    color: #4630eb;
                }
                #about > p {
                    text-indent: 2em;
                }
                .poem {
                    padding-left: 70px;
                    color: #3b3b54;
                    font-weight: 600;
                    line-height: 1.5;
                }
            `}
            </style>
        </App>
    )
}

export default About
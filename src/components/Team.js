import React from 'react';

const teamMembers = [
    {
        name: 'John Smith',
        designation: 'Designation here',
        image: 'https://s3-alpha-sig.figma.com/img/4612/91fa/f3f7c54a3f2de230e1912a46193c019c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=fucaDFIssV8tq1ER43ewtTW~8ZGR1kdiIPCh8CzpzXbz95JMUeO78-Fe0BphvSTcNJApv6YwK3ZmRJxQWqzxGdjsTH9vLB4W6Q9ehSOIDsY0IQFZK9iARdA~Vi4jWXbwUV-~4URxWPwbOV6zl2WOt~bM3BmwTWNQomB-0OiXP8ey-l4rp-Xvs5g7g6RzoZ976C~YsqokosXtG-cXf-C~ncYCXiHoDV8ic6E5S-QVvT5fUhsRnN~dYwP2XwmfNvLXSO~H5SVI30oA6IJ2FZpggxJW4O62CyAONfWFB-7nIg~fdx-FMFzSItG-A5y3RPBGgD8i8DT6cCjPFpzArFiCXw__',
        description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id. Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreet nec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellus gravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesent interdu",
    },
    {
        name: 'Elina Williams',
        designation: 'Designation here',
        image: 'https://s3-alpha-sig.figma.com/img/4316/c574/4cca8e430c2d9f50e72234abc8fd1c0c?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=COYH5ykicRH5TRTyGWt4CcAkdYWhK1RWN~XxMWgGU7OjDsjPnhngpd4Ee3crOGADlX~QNkGCRGn3HLVrLsAaLDsCL7n49yR3hj-qU6mdwDdc8aBMx-LQSd8ykOn45F120mm~75J-AABufimRuFVwUMlQAt4sw35Ra7Pn4NoeKDi~4DfTz0b~A9OQjCXL4m2SMuAuw-kljujLRTfmsyyW2n3q~vyC7L-ZvilAM-1fOiGanqQTW7tgMrRO0PPQSZp9fr21fdq2jpH1QbpNuP~zh8p7AcOyROI5r1tVVGKj6nUvjjcTGoJxHbyvV~2smLXt5DaAXXmSNV-njN3oSRJVww__',
        description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.Tellus sit rnare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreetnec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellusgravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesentinterdu",
    },
    {
        name: 'John Smith',
        designation: 'Designation here',
        image: 'https://s3-alpha-sig.figma.com/img/c5f0/f097/f060c63093179c9aa8c4ce86a8cac7f7?Expires=1737331200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=kvokLtETuJb120WXkkou8gp8JH0S46SvTBb1kl-DcgMKaStLyyrvBDroeSNX4ndXR0J7oy~Lbil0qxs805ipaRYJBvx-WTswOvUg1~cA4mHNLdqblsZ-jpzT1Ikh3wAhLlki2KqDAQ~NwTruZjsklCV1hSRUF~mFna3tzgaDauT19jYNA~8nvTCIsmMcfO33KxSWg5ObB0exCAyAENFC5uwf7m8ZQ5GEMpz2AloWFe-r~VxwNNT6RaoqqJ66IoRDXKjXJj9WqjCXS8i15UROPv2JFEOvBRspfV0-BXOKIiH4B9juLmbypz9a6n7UGrhJtsDJaQL4QaRHjKGGJWBrrQ__',
        description: "Lorem ipsum dolor sit amet consectetur. In justo rutrum sit sit fermentum ut libero hendrerit id.Tellus sit ornare netus sagittis in nunc convallis mattis maecenas. Tempus arcu leo sociis laoreetnec neque sed pellentesque viverra. Consectetur proin amet ut id facilisi quis consectetur. Tellusgravida ultricies feugiat sed eu egestas dolor est ipsum. Malesuada etiam mi gravida praesentinterdu",
    }
];

const Team = () => {
    return (
        <div className="bg-white p-2 md:p-6 rounded-lg mt-4">
            <h1 className="text-3xl font-bold text-gray-900 mb-4">Team</h1>
            <p className="text-gray-700 mb-6">
                Lorem ipsum dolor sit amet consectetur. Id consequat adipiscing arcu nibh. Eget mattis in mi integer sit egestas. Proin tempor id pretium quam. Facilisis purus convallis quam augue.
            </p>

            {teamMembers.map((member, index) => (
                <div key={index} className="bg-[#e8f4fd] p-3 md:px-6 rounded-lg flex flex-col md:flex-row justify-between items-center mb-6">
                    <div className='flex flex-col items-center'>
                        <img
                            src={member.image}
                            alt={member.name}
                            className="w-28 rounded-lg"
                        />
                        <div className='flex  flex-col items-center'>
                            <h2 className="text-md font-bold text-gray-900">{member.name}</h2>
                            <p className="text-sm text-gray-500 mb-2">{member.designation}</p>
                        </div>
                    </div>
                    <div className="text-gray-900 w-[100%] md:w-[83%]">{member.description}
                    </div>
                </div>
            ))}
        </div>
    );
};

export default Team;

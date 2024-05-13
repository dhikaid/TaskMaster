<?php 

namespace App\Mail;

use Illuminate\Bus\Queueable;
use Illuminate\Contracts\Queue\ShouldQueue;
use Illuminate\Mail\Mailable;
use Illuminate\Queue\SerializesModels;

class ResetPasswordMail extends Mailable
{
    use Queueable, SerializesModels;

    public $resetUrl;

    /**
     * Create a new message instance.
     *
     * @return void
     */
    public function __construct($resetUrl)
    {
        $this->resetUrl = $resetUrl;
    }

    /**
     * Build the message.
     *
     * @return $this
     */
    public function build()
    {
        return $this->view('emails.reset_password')
                    ->with([
                        'resetUrl' => $this->resetUrl,
                    ]);
    }
}



?>
<?php

namespace App;

use Illuminate\Database\Eloquent\Model;

class UserDetails extends Model
{
    public function users() {
        return $this->belongsToMany(User::Class);
      }
}
